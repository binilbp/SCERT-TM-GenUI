<script lang="ts">
	import Instructions from './Instructions.svelte';

	let isHelpEnabled: boolean = $state(true);
</script>

<div class="flex flex-col items-center justify-start px-4">
	<Instructions {isHelpEnabled} />
</div>
