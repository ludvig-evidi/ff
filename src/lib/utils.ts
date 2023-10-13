export function formatDate(
	date: string,
	dateStyle: Intl.DateTimeFormatOptions['dateStyle'] = 'long',
	locales = 'en'
) {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}
