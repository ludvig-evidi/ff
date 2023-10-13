<script>
	import { Breadcrumbs, Navbar } from '$lib/components'
	import '../app.css'
</script>

<svelte:head>
	<title>KL*AR Tidslinje</title>
</svelte:head>

<div class="flex h-full flex-col">
	<Navbar />

	<main class="container mx-auto h-full px-4 pb-20 lg:px-8">
		<Breadcrumbs />

		<slot />
	</main>
</div>
