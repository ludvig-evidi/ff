<script>
	import { hendelser } from '$lib/data'
	import { Calendar, Check } from '$lib/icons'
	import { slide } from 'svelte/transition'
	import Event from './Event.svelte'

	let trimHendelser = hendelser.slice(0, 5)

	export function nesteHendelse() {
		if (trimHendelser.length !== hendelser.length) {
			trimHendelser.push(hendelser[trimHendelser.length])
			trimHendelser = trimHendelser
		} else trimHendelser = hendelser.slice(0, 1)
	}
</script>

<div class="card card_timeline max-w-sm">
	<h3>
		<Calendar /> Hendelser
	</h3>

	<ol class="relative ml-2.5 border-l border-gray-200">
		{#each trimHendelser as { dato, tittel, beskrivelse }}
			<Event {dato} {tittel} {beskrivelse} />
		{/each}
	</ol>

	{#if trimHendelser.length === hendelser.length}
		<h3 in:slide>
			<Check /> Saken er avsluttet
		</h3>
	{/if}
</div>

<!-- {trimHendelser.length !== hendelser.length ? 'Neste hendelse' : 'Nullstill'} -->
