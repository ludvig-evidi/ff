export type Sak = {
	saksnavn: string
	opprettet_dato: string
	ansvarlig: string
	kategori: string
	medlem?: string
	arbeidsplass?: string
	status: string
}

const individsaker: Sak[] = [
	{
		saksnavn: 'Tester skjema for individsak',
		opprettet_dato: '9. oktober 2023',
		ansvarlig: 'Bashir Khaan',
		kategori: 'Oppsigelse',
		medlem: 'Amalie Berg',
		status: 'Avsluttet'
	},
	{
		saksnavn: 'tester redirect',
		opprettet_dato: '6. oktober 2023',
		ansvarlig: 'Naja Ali',
		kategori: 'Avtaleforhandling',
		medlem: 'Aisha Khaali',
		status: 'Aktiv'
	},
	{
		saksnavn: 'test #1 sak for wasim',
		opprettet_dato: '9. oktober 2023',
		ansvarlig: 'Wasim Emre',
		kategori: 'Oppsigelse',
		medlem: 'Amalie Berg',
		status: 'Aktiv'
	}
]
const kollektive_saker: Sak[] = [
	{
		saksnavn: 'test koll',
		opprettet_dato: '29. september 2023',
		ansvarlig: 'Wasim Emre',
		kategori: 'Budsjett',
		arbeidsplass: 'Avd. Ekornet',
		status: 'Aktiv'
	},
	{
		saksnavn: 'test',
		opprettet_dato: '29. oktober 2023',
		ansvarlig: 'Leonora Thomas',
		kategori: 'Arbeidsmiljø',
		arbeidsplass: 'Drømmehagen barnehager AS',
		status: 'Aktiv'
	}
]
const organisatoriske_saker: Sak[] = [
	{
		saksnavn: 'Organisatorisk sak',
		opprettet_dato: '12. oktober 2023',
		ansvarlig: 'Bashir Khaan',
		kategori: 'Oppsigelse',
		arbeidsplass: 'Amalie Berg',
		status: 'Avsluttet'
	}
]
const underliggende_saker: Sak[] = [
	{
		saksnavn: 'Underliggende sak',
		opprettet_dato: '12. oktober 2023',
		ansvarlig: 'Bashir Khaan',
		kategori: 'Oppsigelse',
		arbeidsplass: 'Amalie Berg',
		status: 'Avsluttet'
	}
]

export const saker = [
	{ tabellNavn: 'individsaker', tabell: individsaker },
	{ tabellNavn: 'kollektive saker', tabell: kollektive_saker },
	{ tabellNavn: 'organisatoriske saker', tabell: organisatoriske_saker },
	{ tabellNavn: 'underliggende saker', tabell: underliggende_saker }
]
