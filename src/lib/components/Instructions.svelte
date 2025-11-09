<script lang="ts">
	let { isHelpEnabled } = $props();
	let buttonContent: string = $derived(isHelpEnabled ? 'Okay' : 'Help');
</script>

{#if isHelpEnabled}
	<div class="mb-2 w-full rounded-lg border-2 border-sky-900 bg-slate-50 px-4 py-2">
		<p class="text-sm font-semibold md:text-lg">
			Simplify your lesson planning. <br />Create free Teaching Manuals tailored to the Kerala State
			SCERT syllabus in minutes.
		</p>
		<p class="pt-3 text-xs font-semibold md:text-sm">Get Started:</p>
		<ol class=" py-1 text-xs md:text-sm">
			<li>1. Select Class</li>
			<li>2. Select Chapter</li>
			<li>3. Choose Pages</li>
			<li>4. Click Generate and wait for the TM to generate</li>
		</ol>
	</div>
{/if}

<button
	onclick={() => {
		isHelpEnabled = !isHelpEnabled;
		console.log('Toggle Help Instructions');
	}}
	class="rounded-lg bg-slate-700 p-2 text-sky-50"
	>{buttonContent}
</button>
