<script>
	import { Timeline } from '$lib/components'
</script>

<div class="container flex gap-8">
	<div class="flex w-full flex-col gap-x-8 gap-y-8">
		<!-- Informasjon om medlem -->
		<div class="card">
			<h3>Informasjon om medlem</h3>

			<hgroup class="mt-5">
				<h2>Amalie Berg</h2>
				<p class="mt-0.5 underline">Drømmehagen barnehager AS</p>
			</hgroup>

			<div class="mt-8 flex gap-x-16 pb-2 pl-2 text-zinc-700">
				<p class="inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-3 h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
						/>
					</svg>
					48352002
				</p>
				<p class="inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-3 h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
						/>
					</svg>

					amalie.berg@fagforbundet.no
				</p>
			</div>
		</div>

		<!-- Dokumenter -->
		<div class="card">
			<h2>Dokumenter</h2>

			<p class="mt-1">Det finnes ingen dokumenter på denne saken.</p>

			<button class="mt-8">+ Nytt dokument</button>
		</div>

		<div class="card">
			<h2>Notater</h2>

			<button class="mt-8">+ Nytt notat</button>

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
				<p>Det finnes ingen oppføringer å vise.</p>
			</div>
		</div>
	</div>

	<Timeline />
</div>
