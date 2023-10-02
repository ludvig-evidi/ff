<script>
	import { Hendelse } from '$lib/components';
	import { Check, Document } from '$lib/icons';
	import { slide } from 'svelte/transition';

	let count = 4;

	function increment() {
		count += 1;

		if (count >= 4) {
			count = 0;
		}
	}
</script>

<div class="w-full px-8 my-14 lg:mt-20 h-fit gap-4 flex mx-auto">
	<button
		class="flex w-full max-w-xs mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors {count >=
		3
			? 'bg-rose-500 hover:bg-rose-600'
			: ''}"
		on:click={increment}>{count < 3 ? 'Neste hendelse' : 'Nullstill'}</button
	>
</div>

<div class="p-4 py-6 rounded-lg border border-zinc-200 shadow-lg bg-white max-w-xl mx-auto lg:px-8">
	<h1 class="mb-6 text-lg lg:text-xl font-semibold text-gray-800 inline-flex items-center gap-x-3">
		<Document /> Sak opprettet
	</h1>

	<ol class="relative border-l border-gray-200 ml-2.5">
		<Hendelse dato="20. september 2023" tittel="Wasim opprettet saken">
			<span class="italic">Wasim</span> opprettet saken med navn "<span class="font-medium"
				>Avtaleforhandlinger</span
			>".
		</Hendelse>

		{#if count >= 1}
			<Hendelse dato="27. september 2023" tittel="Ansvarlig tillitsvalgt endret">
				<span class="italic">Wasim</span> endret ansvarlig tillitsvalgt fra
				<span class="italic">Amalie</span>
				til
				<span class="italic">Aisha</span>.
			</Hendelse>
		{/if}
		{#if count >= 2}
			<Hendelse dato="2. oktober 2023" tittel="Status endret">
				<span class="italic">Aisha</span> endret status fra <span class="italic">aktiv</span> til
				<span class="italic">videresendt</span>.
			</Hendelse>
		{/if}
		{#if count >= 3}
			<Hendelse dato="4. oktober 2023" tittel="Sak avsluttet">
				<span class="italic">Aisha</span> avsluttet saken.
			</Hendelse>
		{/if}
	</ol>

	{#if count >= 3}
		<h1
			transition:slide
			class="text-lg -mt-10 lg:text-xl font-semibold text-gray-800 inline-flex items-center gap-x-3"
		>
			<Check /> Sak avsluttet
		</h1>
	{/if}
</div>
