<script lang="ts">
	import { page } from '$app/stores'

	$: breadcrumbs = $page.route.id?.slice(1).split('/')
</script>

<ul class="flex gap-x-2 pb-6 pt-12">
	<li><a href="/" class=" text-sm font-semibold">Start</a></li>

	{#if breadcrumbs}
		{#each breadcrumbs as breadcrumb}
			{#if breadcrumb !== ''}
				<span class="select-none">></span>
			{/if}
			<li><a href="/{breadcrumb}" class="text-sm font-semibold capitalize">{breadcrumb}</a></li>
		{/each}
	{/if}
</ul>
