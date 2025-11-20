<script lang="ts">
	import type { Chapter } from '$lib/assets/data';
	//TODO:later import data from backend using load()
	import { classData } from '$lib';

	let selectedClass: string = $state('');
	let selectedSubject: string = $state('');
	let selectedChapter: string = $state('');
	let chapterList: Chapter[] = $state([]);
	let subjectList: string[] = $state([]);

	function getSubjectList(): string[] {
		console.log('Selected chapter', selectedClass);
		const classcontent = classData.find((item) => item.classNumber === selectedClass);
		if (!classcontent) return [];
		return classcontent.subjects.map((item) => item.name);
	}

	function getChapterList(): Chapter[] {
		console.log('Selected chapter', selectedSubject);
		const classcontent = classData.find((item) => item.classNumber === selectedClass);
		if (!classcontent) return [];
		const subjectData = classcontent.subjects.find((item) => item.name === selectedSubject);

		return subjectData ? subjectData.chapters : [];
	}
</script>

<div
	class="my-10 flex w-11/12 flex-col justify-around gap-2 rounded-lg bg-sky-100 p-5 md:w-1/2 lg:w-1/3"
>
	<div class="flex flex-col justify-start">
		<label for="class-selection" class="text-xl font-semibold">Class</label>
		<select
			name="class-menu"
			id="class-selection"
			class="my-1.5 rounded-md bg-slate-50 p-2.5"
			bind:value={selectedClass}
			onchange={() => {
				subjectList = getSubjectList();
			}}
		>
			<option value="" disabled selected hidden>select class</option>
			{#each classData as classData (classData.classNumber)}
				<option> {classData.classNumber} </option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col justify-start">
		<label for="subject-selection" class="text-xl font-semibold">Subject</label>
		<select
			name="subject-menu"
			id="subject-selection"
			class="my-1.5 rounded-md bg-slate-50 p-2.5"
			bind:value={selectedSubject}
			onchange={() => {
				chapterList = getChapterList();
			}}
		>
			{#if selectedClass !== ''}
				<option value="" disabled selected hidden>select subject</option>
				{#each subjectList as subject (subject)}
					<option> {subject} </option>
				{/each}
			{/if}
		</select>
	</div>

	<div class="flex flex-col justify-start">
		<label for="chapters-selection" class="text-xl font-semibold">Chapter</label>
		<select
			name="chapters-menu"
			id="chapters-selection"
			class="my-1.5 rounded-md bg-slate-50 p-2.5"
			bind:value={selectedChapter}
		>
			{#if selectedSubject !== ''}
				<option value="" disabled selected hidden>select chapter</option>
				{#each chapterList as chapter (chapter.chapterNumber)}
					<option>{chapter.title}</option>
				{/each}
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
	<button class="rounded-md bg-sky-600 py-3 text-sky-50">Generate TM</button>
</div>
