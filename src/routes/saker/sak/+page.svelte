<script>
	import { Timeline } from '$lib/components'
	import InformationCard from './InformationCard.svelte'
</script>

<div class="container flex gap-8">
	<div class="flex w-full flex-col gap-4 sm:gap-8">
		<!-- Informasjon om medlem -->
		<div class="card">
			<InformationCard />
		</div>

		<!-- Oppgaver -->
		<div class="card">
			<h2 class="text-base font-semibold leading-7 text-gray-900">Oppgaver</h2>

			<p class="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
				Du har ingen oppgaver knyttet til denne saken.
			</p>
		</div>

		<!-- Dokumenter -->
		<div class="card">
			<h2 class="text-base font-semibold leading-7 text-gray-900">Dokumenter</h2>

			<p class="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
				Det finnes ingen dokumenter på denne saken.
			</p>

			<button class="btn mt-8">+ Nytt dokument</button>
		</div>

		<!-- Notater -->
		<div class="card">
			<h2 class="text-base font-semibold leading-7 text-gray-900">Notater</h2>

			<button class="btn mt-8">+ Nytt notat</button>

			<div class="mt-8 flow-root overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr>
							<th class="whitespace-nowrap py-3.5 pr-3 text-left text-sm font-semibold">Navn</th>
							<th class="whitespace-nowrap py-3.5 pr-3 text-left text-sm font-semibold"
								>Beskrivelse</th
							>
							<th class="whitespace-nowrap py-3.5 pr-3 text-left text-sm font-semibold"
								>Opprettet av</th
							>
							<th class="whitespace-nowrap py-3.5 pr-3 text-left text-sm font-semibold"
								>Opprettet den</th
							>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td />
						</tr>
					</tbody>
				</table>
				<p class="max-w-2xl text-sm leading-6 text-gray-500">
					Det finnes ingen oppføringer å vise.
				</p>
			</div>
		</div>

		<!-- Tidslinje -->
		<div class="block lg:hidden">
			<Timeline />
		</div>
	</div>

	<!-- Tidslinje -->
	<div class="hidden basis-1/3 lg:block">
		<Timeline />
	</div>
</div>
