<script lang="ts">
  let { isGenerating, generatedResult, errorMessage } = $props<{
   isGenerating: boolean;
    generatedResult: any[] | null;
    errorMessage: string;
  }>();
</script>

<div class="mt-6 w-full rounded-lg bg-white p-4 shadow">

  {#if isGenerating}
    <p class="text-center text-sky-600 font-semibold">
      Generating Teaching Manual…
    </p>

  {:else if errorMessage}
    <p class="text-red-600 font-medium">
      {errorMessage}
    </p>

  {:else if generatedResult && generatedResult.length > 0}

    {#each generatedResult as tm (tm["TM Plan Name"])}

      <section class="mb-6 rounded-lg border border-slate-200 p-4">

        <!-- Header -->
        <h2 class="mb-2 text-xl font-bold text-slate-800">
          {tm["TM Plan Name"]}
        </h2>

        <div class="mb-3 text-sm text-slate-600">
          <span><strong>Class:</strong> {tm.Class}</span> |
          <span><strong>Subject:</strong> {tm.Subject}</span> |
          <span><strong>Unit:</strong> {tm.Unit}</span> |
          <span><strong>Page:</strong> {tm["Page No"]}</span>
        </div>

        <!-- Objective -->
        {#if tm.Objective}
          <div class="mb-3">
            <h3 class="font-semibold">Objective</h3>
            <p>{tm.Objective}</p>
          </div>
        {/if}

        <!-- Materials -->
        <div class="mb-3">
          <h3 class="font-semibold">Materials Needed</h3>
          <p>{tm["Materials Needed"]}</p>
        </div>

        <!-- Activity Steps -->
        <div class="mb-3">
          <h3 class="font-semibold">Activity Steps</h3>
          <p class="whitespace-pre-wrap">
            {tm["Activity Steps"]}
          </p>
        </div>

        <!-- Values -->
        <div class="mb-3">
          <h3 class="font-semibold">Values & Concepts</h3>
          <p>{tm["Values and concepts"]}</p>
        </div>

        <!-- Assessment -->
        <div class="mb-3">
          <h3 class="font-semibold">Assessment</h3>
          <p>{tm.Assessment}</p>
        </div>

        <!-- External Activities -->
        {#if tm["External Activities"]}
          <div class="mb-3">
            <h3 class="font-semibold">External Activities</h3>
            <p>{tm["External Activities"]}</p>
          </div>
        {/if}

        <!-- Footer -->
        <div class="mt-4 text-xs text-slate-500">
          Reference: {tm.Reference} | Date: {tm.Date}
        </div>

      </section>

    {/each}

  {:else}
    <p class="text-center text-slate-500">
      No teaching manual generated yet.
    </p>
  {/if}

</div>

