<script lang="ts">
	import { slide } from 'svelte/transition'

	export let dato: string
	export let tittel: string
	export let beskrivelse: string
</script>

<li class="mb-8 ml-6 last:mb-2" transition:slide={{ axis: 'y' }}>
	<div class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-zinc-200" />
	<time class="mb-1 text-xs font-normal leading-none text-zinc-400">{dato}</time>
	<h4 class="text-base font-semibold leading-7 text-zinc-700">{tittel}</h4>
	<p class=" mt-1 text-sm">
		{beskrivelse}
	</p>
</li>
