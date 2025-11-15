<script lang="ts">
	//TODO:later import data from backend using load()
	import { educationalData } from '$lib';

	let selectedClass: string = $state('');
	let selectedSubject: string = $state('');
	let selectedChapter: string = $state('');
	let subjectList: string[] = $state([]);

	function getSubjectList(classnumber: string) {
		let classcontent = educationalData.find((item) => item.classNumber === classnumber);
		if (!classcontent) return [];
		return Object.keys(classcontent.content);
	}
</script>

<div
	class="my-10 flex w-11/12 flex-col justify-around gap-5 rounded-lg bg-sky-100 p-5 md:w-1/2 lg:w-1/3"
>
	<div class="flex flex-col justify-start">
		<label for="class-selection" class="text-xl font-semibold">Class</label>
		<select
			name="class-menu"
			id="class-selection"
			class="my-1.5 rounded-md bg-slate-50 p-2.5"
			bind:value={selectedClass}
			onchange={() => {
				subjectList = getSubjectList(selectedClass);
			}}
		>
			<option value="" disabled selected hidden>select class</option>
			{#each subjectList as subject}
				<option> {subject} </option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col justify-start">
		<label for="chapters-selection" class="text-xl font-semibold">Chapter</label>
		<select
			name="chapters-menu"
			id="chapters-selection"
			class="my-1.5 rounded-md bg-slate-50 p-2.5"
		>
			{#if selectedClass !== ''}
				<option value="" disabled selected hidden>select chapter</option>
				<option> 1 </option>
				<option> 2 </option>
			{/if}
		</select>
	</div>

	<div class="flex flex-col justify-start">
		<label for="subject-selection" class="text-xl font-semibold">Subject</label>
		<select name="subject-menu" id="subject-selection" class="my-1.5 rounded-md bg-slate-50 p-2.5">
			{#if selectedClass !== ''}
				<option value="" disabled selected hidden>select subject</option>
				<option> 1 </option>
				<option> 2 </option>
			{/if}
		</select>
	</div>

	<div class="flex flex-col justify-start">
		<label for="pages-selection" class="text-xl font-semibold">Pages</label>
		<select name="pages-menu" id="pages-selection" class="my-1.5 rounded-md bg-slate-50 p-2.5">
			{#if selectedClass !== ''}
				<option value="" disabled selected hidden>select page</option>
				<option> 1 </option>
				<option> 2 </option>
			{/if}
		</select>
	</div>
</div>
