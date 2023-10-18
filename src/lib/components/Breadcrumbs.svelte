<script lang="ts">
	import { page } from '$app/stores'

	$: breadcrumbs = $page.route.id?.slice(1).split('/')
</script>

<ul class="ml-2 flex gap-x-2 pb-3 pt-6 text-xs sm:ml-1 sm:pb-6 sm:pt-12 sm:text-sm">
	<li><a href="/" class="  font-semibold">Start</a></li>

	{#if breadcrumbs}
		{#each breadcrumbs as breadcrumb}
			{#if breadcrumb !== ''}
				<span class="select-none">></span>
			{/if}
			<li><a href="/{breadcrumb}" class=" font-semibold capitalize">{breadcrumb}</a></li>
		{/each}
	{/if}
</ul>
