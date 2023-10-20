<script lang="ts">
	import { Badge } from '$lib/components'

	export let tableHeaders: string[] | undefined = undefined

	export let tableRows:
		| {
				navn: string
				stilling: string
				epost: string
				rolle: string
				cta: string
		  }[]
		| undefined = undefined
</script>

<div class="rounded-lg border border-zinc-200 bg-white py-10 shadow-md">
	<div class="mx-auto max-w-7xl">
		<div class="px-4 sm:px-8">
			<div class="sm:flex sm:items-center">
				<div class="sm:flex-auto">
					<h1 class="text-base font-semibold leading-6">
						<slot name="title">Tabellnavn</slot>
					</h1>
					<p class="mt-2 text-sm text-gray-500">
						<slot name="description"
							>{#if !tableHeaders || !tableRows}
								<p>Det finnes ingen oppføringer å vise.</p>
							{/if}</slot
						>
					</p>
				</div>

				<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						class="hover:ring-zinc-900/15 rounded-md bg-zinc-50 px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-zinc-900/10 hover:bg-zinc-100"
						><slot name="cta">CTA</slot></button
					>
				</div>
			</div>

			{#if tableRows && tableHeaders}
				<div class="mt-8 flow-root">
					<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6">
						<div class="my-2 inline-block min-w-full align-middle sm:px-6">
							<table class="min-w-full">
								<thead class="text-left text-sm font-semibold">
									<tr>
										{#if tableHeaders}
											{#each tableHeaders as header}
												<th>{header}</th>
											{/each}
										{/if}
									</tr>
								</thead>

								<tbody class="divide-y divide-gray-100 text-sm">
									{#if tableRows && tableHeaders}
										{#each tableRows as row}
											<tr>
												<td>{row.navn}</td>
												<td>{row.stilling}</td>
												<td>{row.epost}</td>
												<td><Badge status="Videresendt">{row.rolle}</Badge></td>
												<td>{row.cta}</td>
											</tr>
										{/each}
									{/if}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	thead tr th {
		@apply px-3 py-3.5 first:pl-4 last:pr-4 first:sm:pl-0 last:sm:pr-0;
	}

	tbody tr td {
		@apply whitespace-nowrap px-3 py-4 text-gray-500 first:pl-4 first:font-medium first:text-gray-900 last:pr-4  first:sm:pl-0 last:sm:pr-0;

		a {
			@apply text-right font-medium text-indigo-600;
		}
	}
</style>
