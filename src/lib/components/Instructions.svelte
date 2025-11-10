<script lang="ts">
	let { statusCode } = $props();
	let instructionMesg = $derived(getInstruction(statusCode));

	function getInstruction(code: number) {
		switch (code) {
			case 10:
				return 'ദയവായി ക്ലാസ്, വിഷയം , പാഠഭാഗം എന്നിവ തിരഞ്ഞെടുക്കുക ';
		}
	}
</script>

<div>
	<p class="mx-4 text-center text-lg font-semibold md:text-3xl">{instructionMesg}</p>
</div>
