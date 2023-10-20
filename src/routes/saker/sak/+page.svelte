<script>
	import { Table, Timeline } from '$lib/components'
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

<div class="container flex gap-8">
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
		<div class="block lg:hidden">
			<Timeline />
		</div>
	</div>

	<!-- Tidslinje -->
	<div class="hidden basis-1/3 lg:block">
		<Timeline />
	</div>
</div>
