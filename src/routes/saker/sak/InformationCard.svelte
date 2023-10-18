<script>
	import { Badge } from '$lib/components'
</script>

<div class="">
	<div class="px-4 sm:px-0">
		<h3 class="text-base font-semibold leading-7 text-gray-900">Saksinformasjon</h3>
		<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Detaljer om sak og relasjoner.</p>
	</div>
	<div class="mt-6 border-t border-gray-100">
		<dl class="divide-y divide-gray-100">
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">Saksnavn</dt>
				<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					Tester skjema for individsak
				</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">Tillitsvalgt</dt>
				<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					Bashir Klubbstyremedlem
				</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">Ansettelsesforhold</dt>
				<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					Kjøkkenassistent Amalie
				</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">Kategori</dt>
				<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					Fortrinnsrett/Ansettelse
				</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">Beskrivelse</dt>
				<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					Dette er en test av skjemaet for en individsak knyttet til ansettelsesforholdet til
					Kjøkkenassistent Amalie. Bashir, som er et klubbstyremedlem, er ansvarlig for denne saken.
					Saken er nå avsluttet.
				</dd>
			</div>
			<div class="flex items-center gap-4 px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">Status</dt>
				<dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					<Badge status="Avsluttet">Avsluttet</Badge>
				</dd>
			</div>
		</dl>
	</div>
</div>
