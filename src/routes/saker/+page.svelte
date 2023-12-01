<script lang="ts">
	import { saker, type Sak } from './saker'
	import { Badge, Dialog } from '$lib/components'

	let aktivtFilter = 'Aktiv'

	$: aktivTabellIndex = 0
	$: aktivTabell = saker[aktivTabellIndex]
	$: filteredAktivTabell = aktivTabell.tabell.filter((kolonne) => kolonne.status === aktivtFilter)

	function changeTable(index: number) {
		aktivtFilter = 'Aktiv'
		aktivTabellIndex = index
	}

	function getActiveCases(tabell: Sak[]) {
		let activeCount = 0

		activeCount = tabell.reduce((count, sak) => {
			if (sak.status === 'Aktiv') {
				return count + 1
			} else {
				return count
			}
		}, 0)

		return activeCount
	}
</script>

<section>
	<header class="mb-5 space-y-1">
		<h1 class="font-Display text-3xl tracking-tight">Saker</h1>
	</header>

	<div class="prose">
		<p class="lead">Trykk på en sakskategori for å se sakene i tabellen.</p>
	</div>

	<div class="not-prose mx-auto mb-10 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-4">
		{#each saker as { tabellNavn, tabell }, index}
			<button on:click={() => changeTable(index)} class="flex w-full flex-col">
				<label
					class="caseCard h-full w-full border {aktivTabellIndex === index
						? 'border-red-800/10 border-b-red-500/40 bg-red-600 text-white'
						: 'border-zinc-200 border-b-zinc-200/40 bg-white'}"
				>
					<input class="hidden" name="visibility" type="radio" checked={index === 0} />
					<h3 class="text-3xl font-bold">{getActiveCases(tabell)}</h3>
					<h4
						class="mt-3 text-sm font-medium text-gray-500 sm:text-base"
						class:text-white={aktivTabellIndex === index}
					>
						{getActiveCases(tabell) === 1 ? 'Aktiv' : 'Aktive'}
						{tabellNavn}
					</h4>
				</label>

				<div
					class="flex w-full justify-center gap-4 rounded-b-lg border border-t-0 py-4 {aktivTabellIndex ===
					index
						? 'border-red-800/10 bg-red-600'
						: 'border-zinc-200 bg-white'}"
				>
					{#if index !== 3}
						<button
							class="btn rounded-md px-4 py-2 text-sm font-semibold"
							class:text-white={aktivTabellIndex === index}>Vis saker</button
						>

						<Dialog
							{index}
							classes={aktivTabellIndex === index
								? 'bg-white text-red-600 hover:bg-red-50 hover:text-red-700'
								: 'bg-red-600 text-white'}>Ny sak</Dialog
						>
					{:else}
						<button class="btn rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white"
							>Søk saker</button
						>
					{/if}
				</div>
			</button>
		{/each}
	</div>
</section>

<div class="card">
	<h1 class="text-left text-2xl font-semibold">
		{aktivTabell.tabellNavn.charAt(0).toUpperCase() + aktivTabell.tabellNavn.slice(1)}
	</h1>

	<div class="mt-8 flex gap-x-36 text-left">
		<div>
			<label for="casesFilter" class="text-base font-semibold"> Status </label>
			<p class="text-sm text-gray-600">Filtrer saker på sakstatus</p>

			<fieldset class="ml-1 mt-2">
				<div class="flex items-baseline gap-x-12 space-y-4">
					{#each ['Aktiv', 'Avsluttet', 'Videresendt', 'Feilregistrert'] as filter}
						<div class="flex items-center">
							<input
								id={filter}
								name="casesFilter"
								type="radio"
								class="h-4 w-4 cursor-pointer border border-indigo-500 text-indigo-500 focus:ring-indigo-500"
								checked={filter === aktivtFilter}
								on:click={() => (aktivtFilter = filter)}
							/>
							<label
								for={filter}
								class="ml-2.5 block cursor-pointer text-sm font-medium capitalize leading-6"
							>
								{filter}
							</label>
						</div>
					{/each}
				</div>
			</fieldset>
		</div>

		<div>
			<label for="caseVerv" class="text-base font-semibold"> Verv </label>
			<p class="text-sm text-gray-600">Filtrer saker på ditt verv</p>

			<fieldset class="ml-1 mt-2">
				<div class="flex flex-wrap items-baseline gap-x-12 space-y-4">
					{#each ['Drømmehager styremedl.', 'Avd. blå styreleder'] as filter}
						<div class="flex items-center">
							<input
								id={filter}
								name="vervFilter"
								type="checkbox"
								checked
								class="h-4 w-4 cursor-pointer rounded border-indigo-500 text-indigo-500 hover:bg-gray-100 focus:outline-0 focus:ring-0 active:outline-none"
							/>
							<label for={filter} class="ml-2.5 block cursor-pointer text-sm font-medium leading-6">
								{filter}
							</label>
						</div>
					{/each}
				</div>
			</fieldset>
		</div>
	</div>

	<div class="mt-10 flow-root">
		<div class="-mx-4 -mt-2 overflow-x-auto sm:-mx-6">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6">
				<table class="sakerTabell min-w-full table-fixed">
					<thead class="text-left text-sm font-semibold">
						<tr>
							<th class="sm:w-1/6">Saksnavn</th>
							<th class="sm:w-1/6">Opprettet den</th>
							<th class="sm:w-1/6">Ansvarlig tillitsvalgt</th>
							<th class="sm:w-1/6">Sakskategori</th>
							<th class="sm:w-1/6"
								>Angående {aktivTabell.tabellNavn !== 'individsaker'
									? 'arbeidsplass'
									: 'medlem'}</th
							>
							<th class="sm:w-1/6">Status</th>
						</tr>
					</thead>

					<tbody class="divide-y divide-gray-200 text-left text-sm font-normal">
						{#if filteredAktivTabell.length > 0}
							{#each filteredAktivTabell as sak}
								<tr class="rounded-lg hover:bg-stone-100">
									<td class="font-medium"><a href="/saker/sak">{sak.saksnavn}</a></td>
									<td>{sak.opprettet_dato}</td>
									<td>{sak.ansvarlig}</td>
									<td>{sak.kategori}</td>
									<td>{sak.medlem || sak.arbeidsplass}</td>
									<td>
										<Badge color={sak.status === 'Aktiv' ? 'green' : 'blue'}>
											{sak.status}
										</Badge>
									</td>
								</tr>
							{/each}
						{:else}
							<tr>
								<td class="font-medium">Ingen oppføringer med dette filteret.</td>
							</tr>
						{/if}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.caseCard {
		@apply mx-auto flex h-fit w-full cursor-pointer flex-col rounded-t-lg  border  p-4  py-5  shadow-md lg:px-8;
	}

	.sakerTabell {
		th {
			@apply py-3.5 pl-4 pr-3 sm:pl-0;
		}

		td {
			@apply whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0;
		}
	}
</style>
