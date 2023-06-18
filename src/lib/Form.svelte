<script>
	import LoadingIndicator from './Loading.svelte';

	/**
	 * @type string
	 */
	export let cinemaType;
	/**
	 * @type Array<string>
	 */
	export let selectedCategories;
	/**
	 * @type string
	 */
	export let specificDescriptors;
	/**
	 * @type Boolean
	 */
	export let loading;

	const categoryTypes = [
		'Ação',
		'Aventura',
		'Animação',
		'Biografia',
		'Comédia',
		'Crime',
		'Documentário',
		'Drama',
		'Familia',
		'Fantasia',
		'Film-Noir',
		'História',
		'Terror',
		'Musical',
		'Mistério',
		'Romance',
		'Sci-Fi',
		'Esporte',
		'Suspense',
		'Guerra',
		'Ocidental',
		'Art-house',
		'Black-Comedy',
		'Infantil',
		'Clássico',
		'Épico',
		'Erótico',
		'Experimental',
		'Conto de fada',
		'Futurista',
		'Gangster',
		'Golpe',
		'Histórico',
		'Férias',
		'Indie',
		'Juvenil',
		'Melodrama',
		'Monstro',
		'Politico',
		'Psicológico',
		'Filme de estrada',
		'Sátira',
		'Ficção cientifica',
		'Questões sociais',
		'Super-heróis',
		'Surreal',
		'Adolescente',
		'Vampiro',
		'Zumbi'
	];

	let cinemaTypes = [
		{ value: 'series', title: 'Series' },
		{ value: 'filmes', title: 'Filmes' },
		{ value: 'series ou filmes', title: 'Sem preferencia' }
	];
</script>

<div class="pt-6 md:pt-10 text-slate-200">
	<div>
		<div class="mb-8">
			<div class="mb-4 font-semibold text-lg">Que tipo de entretenimento você está procurando?</div>
			<div class="flex items-center">
				{#each cinemaTypes as type (type.value)}
					<button
						on:click={() => {
							cinemaType = type.value;
						}}
						class={`${
							cinemaType === type.value ? 'bg-purple-600/40' : ''
						} text-slate-200 font-bold mr-2 text-sm mt-2 py-2 px-4 rounded-full border border-purple-600`}
					>
						{type.title}
					</button>
				{/each}
			</div>
		</div>
		<div>
			<div class="mb-4 font-semibold text-lg">
				Selecione todas as categorias que você deseja que a série ou filme inclua.
			</div>
			<div class="flex items-center flex-wrap">
				{#each categoryTypes as category}
					<label
						class={`${
							selectedCategories.includes(category) ? 'bg-purple-600/40' : ''
						} text-slate-200 font-bold mr-2 mt-2 text-sm py-2 px-4 rounded-full border border-purple-600`}
					>
						<input
							class="hidden"
							type="checkbox"
							bind:group={selectedCategories}
							name="categories"
							value={category}
						/>
						{category}
					</label>
				{/each}
			</div>
		</div>
		<div class="mt-8">
			<div class="mb-4 font-semibold text-lg">
				Escreva quaisquer outras especificações aqui. Seja tão exigente quanto você quiser.
			</div>
			<textarea
				bind:value={specificDescriptors}
				class="bg-white/40 border border-white/0 p-2 rounded-md placeholder:text-slate-800 text-slate-900 w-full h-20 font-medium"
				placeholder="Ex: Deve ter pelo menos 2 temporadas e estar no Netflix ou Star+."
			/>
			<button
				on:click
				class={`${
					loading
						? 'bg-purple-400/50'
						: 'bg-purple-600 hover:bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 '
				} mt-4 w-full h-10 text-white font-bold p-3 rounded-full flex items-center justify-center`}
			>
				{#if loading}
					<LoadingIndicator />
				{:else}
					<p>Criar minha lista</p>
				{/if}
			</button>
		</div>
	</div>
</div>
