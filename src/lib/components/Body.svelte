<script lang="ts">
	import { Instructions, SelectionMenu } from '$lib';

	let statusCode: number = $state(10);
</script>

<div class="flex flex-col items-center justify-start p-4">
	<Instructions {statusCode} />
	<SelectionMenu />
</div>
