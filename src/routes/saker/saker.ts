type Sak = {
	saksnavn: string
	opprettet_dato: string
	ansvarlig: string
	kategori: string
	medlem: string
	status: string
}

type Saker = {
	individsaker: Sak[]
	kollektive_saker: Sak[]
	organisatoriske_saker: Sak[]
	underliggende_saker: Sak[]
}

export const saker: Saker = {
	individsaker: [
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
	],
	kollektive_saker: [
		{
			saksnavn: 'test koll',
			opprettet_dato: '29. september 2023',
			ansvarlig: 'Wasim Emre',
			kategori: 'Budsjett',
			medlem: 'Avd. Ekornet',
			status: 'Aktiv'
		},
		{
			saksnavn: 'test',
			opprettet_dato: '29. oktober 2023',
			ansvarlig: 'Leonora Thomas',
			kategori: 'Arbeidsmiljø',
			medlem: 'Drømmehagen barnehager AS',
			status: 'Aktiv'
		}
	],
	organisatoriske_saker: [
		{
			saksnavn: 'Organisatorisk sak',
			opprettet_dato: '12. oktober 2023',
			ansvarlig: 'Bashir Khaan',
			kategori: 'Oppsigelse',
			medlem: 'Amalie Berg',
			status: 'Avsluttet'
		}
	],
	underliggende_saker: [
		{
			saksnavn: 'Underliggende sak',
			opprettet_dato: '12. oktober 2023',
			ansvarlig: 'Bashir Khaan',
			kategori: 'Oppsigelse',
			medlem: 'Amalie Berg',
			status: 'Avsluttet'
		}
	]
}
