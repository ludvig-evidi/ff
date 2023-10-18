<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte'
	import Dropdown from './Dropdown.svelte'
	import { fade, fly } from 'svelte/transition'

	export let index: number

	let tittel: string

	switch (index) {
		case 0:
			tittel = 'individsak'
			break
		case 1:
			tittel = 'kollektiv sak'
			break
		case 2:
			tittel = 'organisatorisk sak'
			break
	}

	export let classes = ''

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	})
</script>

<button use:melt={$trigger} class="btn {classes} rounded-md px-4 py-2 text-sm font-semibold">
	Ny sak
</button>

<div use:melt={$portalled}>
	{#if $open}
		<div
			use:melt={$overlay}
			in:fade={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
		/>
		<div
			in:fly={{ y: 25, delay: 50, duration: 300 }}
			class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
              max-w-xl translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
              p-6 shadow-lg"
			use:melt={$content}
		>
			<h2 use:melt={$title} class="m-0 text-lg font-medium text-black">Ny {tittel}</h2>
			<p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
				Opprett en ny sak.
			</p>

			<Dropdown />

			<button
				use:melt={$close}
				aria-label="close"
				class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-4 top-4 inline-flex
                  h-6 w-6 appearance-none items-center justify-center
                  rounded-full p-1"
			>
				X
			</button>
		</div>
	{/if}
</div>
