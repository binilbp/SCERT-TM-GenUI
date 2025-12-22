<script lang="ts">
	import type { Chapter } from '$lib/assets/data';
	//TODO:later import data from backend using load()
	import { classData } from '$lib';
	import OutputWindow from './OutputWindow.svelte';
	

	//TODO:make use of derived instead of state for all list
	let selectedClass: string = $state('');
	let selectedSubject: string = $state('');
	let selectedChapter: string = $state('');
	let selectedPage: number = $state(0);
	let chapterList: Chapter[] = $state([]);
	let subjectList: string[] = $state([]);

	
	let isGenerating: boolean = $state(false);
	
	//create a 100 numbers array (1...100)
	const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

	function getSubjectList(): string[] {
		const classcontent = classData.find((item) => item.classNumber === selectedClass);
		if (!classcontent) return [];
		return classcontent.subjects.map((item) => item.name);
	}

	function getChapterList(): Chapter[] {
		const classcontent = classData.find((item) => item.classNumber === selectedClass);
		if (!classcontent) return [];
		const subjectData = classcontent.subjects.find((item) => item.name === selectedSubject);

		return subjectData ? subjectData.chapters : [];
	}

	//check chapter really belongs to the subject and class
	function isSelectionConsistent(): boolean {
		const classObj = classData.find(c => c.classNumber === selectedClass);
		if (!classObj) return false;

		const subjectObj = classObj.subjects.find(s => s.name === selectedSubject);
		if (!subjectObj) return false;

		return subjectObj.chapters.some(
			ch => ch.chapterNumber === selectedChapter
		);
	}

	//check validity;  used to disable or enable the generate button
	function isFormValid(): boolean {
		return (
			selectedClass !== '' &&
			selectedSubject !== '' &&
			selectedChapter !== '' &&
			selectedPage > 0 &&
			isSelectionConsistent()
		);
	}

	function getTMData() {
		//check all options selected or not
		console.log("class:", selectedClass)
		console.log("subject:", selectedSubject)
		console.log("chapter:", selectedChapter)
		console.log("page:", selectedPage)

		const payload = {
			class_name: selectedClass,
			subject: selectedSubject,
			chapter_number: Number(selectedChapter),
			page_number: selectedPage
		}; 	
		

		console.log("Getting TM Data")

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
				selectedSubject = '';
 				selectedChapter = '';
  				selectedPage = 0;
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
  				selectedChapter = '';
  				selectedPage = 0;
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
		id="chapters-selection"
		class="my-1.5 rounded-md bg-slate-50 p-2.5"
		bind:value={selectedChapter}
		>
		{#if selectedSubject !== ''}
			<option value="" disabled selected hidden>select chapter</option>

			{#each chapterList as chapter (chapter.chapterNumber)}
			<option value={chapter.chapterNumber}>
				{chapter.title}
			</option>
			{/each}
		{/if}
		</select>
	</div>

	<div class="flex flex-col justify-start">
		<label for="pages-selection" class="text-xl font-semibold">Page</label>
		<select 
			name="pages-menu" 
			id="pages-selection" 
			class="my-1.5 rounded-md bg-slate-50 p-2.5" 
			bind:value={selectedPage}
			
		>
		{#if selectedChapter !== ''}
			<option value="" disabled selected hidden>select page</option>

			{#each numbers as num}
			<option value={num}>
				{num}
			</option>
			{/each}
		{/if}
		</select>
	</div>

	<button
		class="rounded-md bg-sky-600 py-3 text-sky-50"
		disabled={!isFormValid()}
		onclick={() => {
			getTMData();
		}}
	>
		{#if isGenerating}
			Stop
		{:else}
			Create Teaching Mannual
		{/if}
		
	</button>

	<OutputWindow {isGenerating} />
</div>
