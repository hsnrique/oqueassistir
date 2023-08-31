# Como funciona
Este projeto usa a API OpenAI GPT-3 (especificamente, text-davinci-003) e as funções Vercel Edge com streaming. Ele gera 5 recomendações de cinema com base no formulário e na entrada do usuário, envia-o à API GPT-3 por meio de uma função Vercel Edge e, em seguida, transmite a resposta de volta para o aplicativo.

### Executando localmente
Depois de clonar o repositório, vá para a OpenAI para criar uma conta e coloque sua chave API em um arquivo chamado `.env`.

### Por exemplo:

`OPENAI_API_KEY=...`

Em seguida, execute o aplicativo na linha de comando e ele estará disponível em http://localhost:5173.

`npm run dev`

<br>
<br>

##🌹 Você gosta deste projeto?
Você gostou? Gostaria que eu trouxesse mais? <br> É assim que eu sei se estou no caminho certo e entregando soluções interessantes para você.
<br>
<br>
[![Buy me a coffee](/src/lib/bmc-button.svg)](https://bmc.link/henrymartinsb)
