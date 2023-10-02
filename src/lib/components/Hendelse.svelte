<script lang="ts">
	import { slide } from 'svelte/transition'

	export let dato: string
	export let tittel: string
	export let beskrivelse: string
</script>

<li class="mb-8 lg:mb-10 ml-4" transition:slide={{ axis: 'y' }}>
	<div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white bg-gray-200" />
	<time class="mb-1 text-xs lg:text-sm font-normal leading-none text-gray-400">{dato}</time>
	<h3 class="text-base lg:text-lg leading-7 font-semibold text-gray-700">{tittel}</h3>
	<p class="text-sm lg:text-base font-normal text-gray-500 mt-1">
		{beskrivelse}
	</p>
</li>
