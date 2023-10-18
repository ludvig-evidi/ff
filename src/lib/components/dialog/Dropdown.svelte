<script lang="ts">
	import { createCombobox, melt, type ComboboxItemProps } from '@melt-ui/svelte'
	import { Check, ChevronDown, ChevronUp } from 'lucide-svelte'
	import { fly } from 'svelte/transition'

	type Sakskategori = {
		navn: string
		disabled: boolean
	}

	let categories: Sakskategori[] = [
		{
			navn: 'Oppsigelse',
			disabled: false
		},
		{
			navn: 'Rett til fast ansettelse',
			disabled: false
		},
		{
			navn: 'Lønn',
			disabled: false
		}
	]

	const toOption = (category: Sakskategori): ComboboxItemProps<Sakskategori> => ({
		value: category,
		disabled: category.disabled
	})

	const {
		elements: { menu, input, option, label },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<Sakskategori>({
		forceVisible: true
	})

	$: if (!$open) {
		$inputValue = $selected?.label ?? ''
	}

	$: filteredMangas = $touchedInput
		? categories.filter(({ navn }) => {
				const normalizedInput = $inputValue.toLowerCase()
				return navn.toLowerCase().includes(normalizedInput)
		  })
		: categories
</script>

<div class="flex flex-col gap-1">
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label use:melt={$label}>
		<span class="text-sm font-medium text-blue-900">Sakskategori</span>
	</label>

	<div class="relative max-w-xs">
		<input
			use:melt={$input}
			class="flex h-10 items-center justify-between rounded-lg bg-white
            px-3 pr-12 text-black"
			placeholder="Lønn..."
		/>
		<div class="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-blue-900">
			{#if $open}
				<ChevronUp class="square-4" />
			{:else}
				<ChevronDown class="square-4" />
			{/if}
		</div>
	</div>
</div>
{#if $open}
	<ul
		class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-lg"
		use:melt={$menu}
		transition:fly={{ duration: 150, y: -5 }}
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"
			tabindex="0"
		>
			{#each filteredMangas as kategori, index (index)}
				<li
					use:melt={$option(toOption(kategori))}
					class="relative cursor-pointer scroll-my-2 rounded-md py-2 pl-4 pr-4
          hover:bg-blue-100
          data-[highlighted]:bg-blue-200 data-[highlighted]:text-blue-900
            data-[disabled]:opacity-50"
				>
					{#if $isSelected(kategori)}
						<div class="check absolute left-2 top-1/2 z-10 text-blue-900">
							<Check class="square-4" />
						</div>
					{/if}
					<div class="pl-4">
						<span class="font-medium">{kategori.navn}</span>
					</div>
				</li>
			{:else}
				<li class="relative cursor-pointer rounded-md py-1 pl-8 pr-4">No results found</li>
			{/each}
		</div>
	</ul>
{/if}

<style lang="postcss">
	.check {
		@apply absolute left-2 top-1/2 text-blue-500;
		translate: 0 calc(-50% + 1px);
	}
</style>
