<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Body from '$lib/components/Body.svelte';
</script>

<div class="flex min-h-dvh flex-col justify-between">
	<div class="flex min-h-dvh flex-col justify-start gap-4 md:gap-6">
		<Header />
		<Body />
	</div>
	<Footer />
</div>
