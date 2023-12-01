<script lang="ts">
	export let color: 'green' | 'blue' | 'yellow' | 'red' | undefined = undefined
</script>

{#if color === 'green'}
	<span
		class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
	>
		<slot />
	</span>
{:else if color === 'blue'}
	<span
		class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
	>
		<slot />
	</span>
{:else if color === 'red'}
	<span
		class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
	>
		<slot />
	</span>
{:else if color === 'yellow'}
	<span
		class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
	>
		<slot />
	</span>
{:else}
	<span
		class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
	>
		<slot />
	</span>
{/if}
