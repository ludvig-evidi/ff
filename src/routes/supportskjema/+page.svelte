<script lang="ts">
	import { fly } from 'svelte/transition'

	const inquires: string[] = ['Feil i system', 'Endring av funksjon', 'Ønske om ny funksjon']

	let selectedInquiryType: string = inquires[0]

	let inquiryDescription: string

	$: switch (selectedInquiryType) {
		case inquires[0]:
			inquiryDescription = 'feilen så godt du klarer. Hva gjorde du når du oppdaget feilen?'
			break

		case inquires[1]:
			inquiryDescription =
				'hvilken funksjon du ønsker å endre / forbedre. Gjerne gi et konkret forslag til forbedring.'
			break

		case inquires[2]:
			inquiryDescription =
				'ønsket funksjon så godt du klarer. Vi tar kontakt dersom vi trenger mer informasjon.'
			break

		default:
			break
	}
</script>

<form class="max-w-4xl mt-4">
	<hgroup>
		<h1 class="text-base font-semibold leading-7 text-gray-900">Support</h1>
		<p class="mt-1 text-sm leading-6 text-gray-600">
			Bruk dette skjema til å melde om feil, ønske om endring av funksjon eller nye funksjoner.
		</p>
	</hgroup>

	<div class="mt-10 divide-y divide-gray-900/10">
		<section class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-8 mb-4">
			<!-- Navn -->
			<div class="sm:col-span-full sm:max-w-sm">
				<label for="name" class="block text-sm font-medium leading-6 text-gray-900">Navn</label>
				<div class="mt-2">
					<input
						type="text"
						name="name"
						id="name"
						autocomplete="name"
						placeholder="Wasim Emre"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<!-- E-post -->
			<div class="sm:col-span-3 sm:max-w-sm">
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-post</label>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						placeholder="wasim.emre@fagforbundet.org"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<!-- Mobil -->
			<div class="sm:col-span-3 sm:max-w-sm">
				<label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Mobil</label>
				<div class="mt-2">
					<input
						id="phone"
						name="phone"
						type="text"
						autocomplete="tel"
						placeholder="98768756"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<!-- Verv -->
			<div class="sm:col-span-3">
				<label for="rep-position" class="block text-sm font-medium leading-6 text-gray-900"
					>Ditt verv</label
				>
				<div class="mt-2">
					<select
						id="rep-position"
						name="rep-position"
						autocomplete="country-name"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-sm sm:text-sm sm:leading-6"
					>
						<option>Klubbleder - Drømmehagen Barnehager AS</option>
						<option>Klubbleder vara - Varme Hender Hjemmehelp AS </option>
					</select>
				</div>
			</div>
		</section>

		<section class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-4">
			<!-- Type -->
			<div class="sm:col-span-full">
				<hgroup class="mt-8 mb-4">
					<h1 class="text-base font-semibold leading-7 text-gray-900">Type henvendelse</h1>
					<p class="mt-1 text-sm leading-6 text-gray-600">
						Velg alternativet som beskriver din henvendelse best.
					</p>
				</hgroup>

				<fieldset>
					<div class="flex items-baseline gap-x-12 space-y-4">
						{#each inquires as inquiry, i}
							<div class="flex items-center">
								<input
									id={inquiry}
									name="casesFilter"
									type="radio"
									checked={inquiry === selectedInquiryType}
									class="h-4 w-4 cursor-pointer border border-indigo-500 text-indigo-500 focus:ring-indigo-500"
									on:click={() => (selectedInquiryType = inquires[i])}
								/>
								<label
									for={inquiry}
									class="ml-2.5 block cursor-pointer text-sm font-medium leading-6"
								>
									{inquiry}
								</label>
							</div>
						{/each}
					</div>
				</fieldset>
			</div>

			<!-- Beskrivelse -->
			<div class="col-span-full">
				<label for="about" class="block text-sm font-medium leading-6 text-gray-900"
					>Beskrivelse</label
				>
				<div class="mt-2">
					<textarea
						id="about"
						name="about"
						rows="4"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					></textarea>
				</div>

				<p
					class="mt-3 pb-6 flex text-sm leading-6 gap-1 w-full sm:whitespace-nowrap text-gray-600 h-12"
				>
					<span class="whitespace-nowrap">Vennligst beskriv</span>
					{#key inquiryDescription}
						<span
							class="inline-flex"
							in:fly|global={{ y: -10, delay: 300, duration: 300 }}
							out:fly|global={{ y: 10, duration: 300 }}>{inquiryDescription}</span
						>
					{/key}
				</p>
			</div>
		</section>
	</div>

	<!-- Send -->
	<div class="pt-12 justify-end min-w-full flex">
		<div class="flex gap-4 text-sm">
			<button
				class="flex w-full justify-center rounded-md px-6 py-1.5 font-semibold leading-6 hover:ring-1 hover:ring-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
				>Avbryt</button
			>

			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Send</button
			>
		</div>
	</div>
</form>
