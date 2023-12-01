<script>
	import { Badge, Table, Timeline } from '$lib/components'
	import InformationCard from './InformationCard.svelte'

	const oppgaver = [
		{
			navn: 'Testing Relationship',
			stilling: 'This is a test.',
			epost: 'Wasim Klubbleder Einstein',
			rolle: 'Ikke startet',
			cta: '17. oktober 2023'
		}
	]
</script>

<div class="flex gap-8">
	<div class="flex w-full flex-col gap-4 sm:gap-8">
		<!-- Informasjon om medlem -->
		<div class="card">
			<InformationCard />
		</div>

		<!-- Oppgaver -->
		<Table
			tableHeaders={['Oppgave', 'Sammendrag', 'Tillitsvalgt', 'Status', 'Frist']}
			tableRows={oppgaver}
		>
			<span slot="title">Oppgaver</span>
			<span slot="description">Liste over oppgaver tilknyttet denne saken.</span>
			<span slot="cta">+ Ny oppgave</span>
		</Table>

		<!-- Dokumenter -->
		<Table>
			<span slot="title">Dokumenter</span>
			<span slot="cta">+ Nytt dokument</span>
		</Table>

		<!-- Notater -->
		<Table>
			<span slot="title">Notater</span>
			<span slot="cta">+ Nytt notat</span>
		</Table>

		<!-- Tidslinje -->
		<div class="flex flex-col gap-4 sm:flex-row lg:hidden">
			<Timeline />
			<div class="card px-5 sm:px-8 lg:block">
				<h1 class="text-base font-semibold leading-6">Tilgangsliste</h1>

				<ul class="divide-y divide-gray-100 text-sm text-gray-600">
					<li class="flex items-center justify-between py-4 first:mt-2">
						<div>
							<p class="font-semibold text-gray-800">Wasim Emre</p>
							<p class="mt-1 text-xs tracking-wide">Klubbleder</p>
						</div>
						<Badge color="green">Tilgang</Badge>
					</li>
					<li class="flex items-center justify-between py-4">
						<div>
							<p class="font-semibold text-gray-800">Bashir Kaan</p>
							<!-- <p class="mt-1 text-xs tracking-wide">Tillitsvalgt</p> -->
						</div>
						<Badge color="green">Tillitsvalgt</Badge>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-8">
		<!-- Tidslinje -->
		<div class="hidden basis-1/3 lg:block">
			<Timeline />
		</div>

		<div class="card hidden lg:block">
			<h1 class="text-base font-semibold leading-6">Tilgangsliste</h1>

			<ul class="divide-y divide-gray-100 text-sm text-gray-600">
				<li class="flex items-center justify-between py-4 first:mt-2">
					<div>
						<p class="font-semibold text-gray-800">Wasim Emre</p>
						<p class="mt-1 text-xs tracking-wide">Klubbleder</p>
					</div>
					<!-- <p class="text-xs tracking-wide">Klubbleder</p> -->
					<!-- <Badge>Klubbleder</Badge> -->
				</li>
				<li class="flex items-center justify-between py-4">
					<div>
						<p class="font-semibold text-gray-800">Bashir Kaan</p>
						<p class="mt-1 text-xs tracking-wide">Tillitsvalgt</p>
					</div>
					<!-- <p class="text-xs tracking-wide">Tillitsvalgt</p> -->
					<!-- 					<Badge>Tillitsvalgt</Badge> -->
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.cssCard {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		height: -moz-fit-content;
		height: fit-content;
		width: 100%;
		flex-direction: column;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: rgb(228 228 231 / 1);
		background-color: white;
		padding: 1rem;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	@media (min-width: 1024px) {
		.cssCard {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>
