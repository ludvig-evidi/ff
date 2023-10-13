<script lang="ts">
	import { saker } from './saker'

	const casesFilters = ['Aktiv', 'Avsluttet', 'Videresendt', 'Feilregistrert']
	const cards: { cases: number; title: string }[] = [
		{ cases: saker.individsaker.length, title: 'Individsaker' },
		{ cases: saker.kollektive_saker.length, title: 'Kollektive saker' },
		{ cases: saker.organisatoriske_saker.length, title: 'Organisatoriske saker' },
		{ cases: saker.underliggende_saker.length, title: 'Saker i undergrupper' }
	]

	$: activeCase = cards[0].title
	let activeCases = saker.individsaker

	$: caseFilter = 'Aktiv'

	$: switch (activeCase) {
		case 'Individsaker':
			activeCases = saker.individsaker.filter((entry) => entry.status === caseFilter)
			break
		case 'Kollektive saker':
			activeCases = saker.kollektive_saker.filter((entry) => entry.status === caseFilter)
			break
		case 'Organisatoriske saker':
			activeCases = saker.organisatoriske_saker.filter((entry) => entry.status === caseFilter)
			break
		case 'Saker i undergrupper':
			activeCases = saker.underliggende_saker.filter((entry) => entry.status === caseFilter)
			break
	}
</script>

<section>
	<header class="mb-5 space-y-1">
		<h1 class="font-Display text-3xl tracking-tight">Saker</h1>
	</header>

	<div class="prose">
		<p class="lead">Trykk på en sakskategori for å se sakene i tabellen.</p>
	</div>

	<div class="not-prose mx-auto my-12 grid grid-cols-1 gap-6 sm:grid-cols-4">
		{#each cards as { cases, title }, index}
			<button on:click={() => (activeCase = title)}>
				<label class="card caseCard cursor-pointer">
					<input
						class="box-content hidden h-full w-full"
						name="visibility"
						type="radio"
						checked={index === 0}
					/>
					<h3 class="text-3xl font-bold">{cases}</h3>
					<h4 class="mt-3 font-medium text-gray-500">{title}</h4>
				</label>
			</button>
		{/each}
	</div>
</section>

<div class="card">
	<h1 class="text-left text-2xl font-semibold">
		{activeCase}
	</h1>

	<div class="mt-8 self-start text-left">
		<label for="" class="text-base font-semibold"> Status </label>
		<p class="text-sm text-gray-600">Filtrer hvilke saker som skal vises.</p>

		<fieldset class="mt-4">
			<div class="gap-x-12 sm:flex sm:items-center">
				{#each casesFilters as filter}
					<div class="flex items-center">
						<input
							id={filter}
							name="casesFilter"
							type="radio"
							class="h-4 w-4 cursor-pointer border border-indigo-500 text-indigo-500 focus:ring-indigo-500"
							checked={filter === caseFilter}
							on:click={() => (caseFilter = filter)}
						/>
						<label
							for={filter}
							class="ml-3 block cursor-pointer text-sm font-medium capitalize leading-6"
						>
							{filter}
						</label>
					</div>
				{/each}
			</div>
		</fieldset>
	</div>

	<div class="mt-10 flow-root">
		<div class="-mx-4 -mt-2 overflow-x-auto sm:-mx-6">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6">
				<table class="sakerTabell min-w-full">
					<thead class="text-left text-sm font-semibold">
						<tr>
							<th>Saksnavn</th>
							<th>Opprettet den</th>
							<th>Ansvarlig tillitsvalgt</th>
							<th>Sakskategori</th>
							<th>Angående medlem</th>
							<th>Status</th>
						</tr>
					</thead>

					<tbody class="divide-y divide-gray-200 text-left text-sm font-normal">
						{#if activeCases.length > 0}
							{#each activeCases as sak}
								<tr class="rounded-lg hover:bg-stone-100">
									<td class="font-medium"><a href="/saker/sak">{sak.saksnavn}</a></td>
									<td>{sak.opprettet_dato}</td>
									<td>{sak.ansvarlig}</td>
									<td>{sak.kategori}</td>
									<td>{sak.medlem}</td>
									<td
										><span
											class={sak.status === 'Aktiv'
												? 'bg-green-50 text-green-700 ring-green-600/20'
												: 'bg-blue-50 text-blue-700 ring-blue-700/10'}>{sak.status}</span
										>
									</td>
								</tr>
							{/each}
						{:else}
							<tr> <td class="font-medium">Ingen oppføringer med dette filteret.</td> </tr>
						{/if}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.caseCard {
		@apply text-center transition;
	}

	.caseCard:has(:checked) {
		@apply border-red-900/20 bg-red-600;

		h3 {
			@apply text-white;
		}

		h4 {
			@apply text-red-50;
		}
	}

	.sakerTabell {
		th {
			@apply py-3.5 pl-4 pr-3 sm:pl-0;
		}

		td {
			@apply whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0;

			span {
				@apply inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset;
			}
		}
	}
</style>
