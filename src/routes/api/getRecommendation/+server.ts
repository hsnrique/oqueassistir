import { createParser } from 'eventsource-parser';
import { OPENAI_API_KEY } from '$env/static/private';

const key = OPENAI_API_KEY;

interface OpenAIStreamPayload {
	model: string;
	messages: Array<{ role: string; content: string }>;
	temperature: number;
	top_p: number;
	frequency_penalty: number;
	presence_penalty: number;
	max_tokens: number;
	stream: boolean;
	n: number;
}

async function OpenAIStream(payload: OpenAIStreamPayload) {
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();

	let counter = 0;

	const res = await fetch('https://api.openai.com/v1/chat/completions', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${key}`
		},
		method: 'POST',
		body: JSON.stringify(payload)
	});

	const stream = new ReadableStream({
		async start(controller) {
			function onParse(event: any) {
				if (event.type === 'event') {
					const data = event.data;
					// https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream
					if (data === '[DONE]') {
						controller.close();
						return;
					}
					try {
						const json = JSON.parse(data);
						const text = json.choices[0].delta?.content || '';

						if (counter < 2 && (text.match(/\n/) || []).length) {
							// this is a prefix character (i.e., "\n\n"), do nothing
							return;
						}
						const queue = encoder.encode(text);
						controller.enqueue(queue);
						counter++;
					} catch (e) {
						controller.error(e);
					}
				}
			}

			const parser = createParser(onParse);
			for await (const chunk of res.body as any) {
				parser.feed(decoder.decode(chunk));
			}
		}
	});
	return stream;
}

export async function POST({ request }: { request: any }) {
	const { searched } = await request.json();
	const payload = {
		model: 'gpt-4o-mini',  // Use 'gpt-4' or 'gpt-3.5-turbo' as needed
		messages: [{ role: 'user', content: searched }],
		temperature: 0.7,
		max_tokens: 2048,
		top_p: 1.0,
		frequency_penalty: 0.0,
		stream: true,
		presence_penalty: 0.0,
		n: 1
	};
	const stream = await OpenAIStream(payload);
	return new Response(stream);
}
