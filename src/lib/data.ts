type Hendelser = {
	dato: string
	tittel: string
	beskrivelse: string
}[]

export const hendelser: Hendelser = [
	{
		dato: '20. september 2023',
		tittel: 'Sak opprettet',
		beskrivelse: 'Wasim opprettet saken med navn "Avtaleforhandlinger".'
	},
	{
		dato: '1. januar 1970',
		tittel: 'Dummy data',
		beskrivelse: 'Lorem ipsum, dolor sit amet consectetur adipisicing.'
	},
	{
		dato: '1. januar 1970',
		tittel: 'Dummy data',
		beskrivelse: 'Lorem ipsum, dolor sit amet consectetur adipisicing.'
	},
	{
		dato: '27. september 2023',
		tittel: 'Ansvarlig tillitsvalgt endret',
		beskrivelse: 'Wasim endret ansvarlig tillitsvalgt fra Amalie til Aisha.'
	},
	{
		dato: '2. oktober 2023',
		tittel: 'Status endret',
		beskrivelse: 'Aisha endret status fra aktiv til videresendt.'
	},
	{
		dato: '4. oktober 2023',
		tittel: 'Sak avsluttet',
		beskrivelse: 'Aisha avsluttet saken.'
	}
]
