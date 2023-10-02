<script>
	import Hendelse from '$lib/components/Hendelse.svelte'
	import { hendelser } from '$lib/data'
	import { Check, Calendar } from '$lib/icons'
	import { slide } from 'svelte/transition'

	let trimHendelser = hendelser.slice(0, 1)

	function nesteHendelse() {
		if (trimHendelser.length !== hendelser.length) {
			trimHendelser.push(hendelser[trimHendelser.length])
			trimHendelser = trimHendelser
		} else trimHendelser = hendelser.slice(0, 1)
	}
</script>

<button
	on:click={nesteHendelse}
	class="flex w-full max-w-xs mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 {trimHendelser.length ===
	hendelser.length
		? 'bg-rose-600 hover:bg-rose-500'
		: ''}">{trimHendelser.length !== hendelser.length ? 'Neste hendelse' : 'Nullstill'}</button
>

<div
	class="p-4 py-6 rounded-lg border border-zinc-200 shadow-md lg:shadow-lg bg-white max-w-xl mx-auto lg:px-8"
>
	<h1 class="mb-6 text-lg lg:text-xl font-semibold text-gray-800 inline-flex items-center gap-x-4">
		<Calendar /> Hendelser
	</h1>

	<ol class="relative border-l border-gray-200 ml-2.5">
		{#each trimHendelser as { dato, tittel, beskrivelse }}
			<Hendelse {dato} {tittel} {beskrivelse} />
		{/each}
	</ol>

	{#if trimHendelser.length === hendelser.length}
		<h1
			in:slide
			class="text-lg -mt-10 lg:text-xl font-semibold text-gray-800 inline-flex items-center gap-x-4"
		>
			<Check /> Saken er avsluttet
		</h1>
	{/if}
</div>
