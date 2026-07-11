<script lang="ts">
   
    interface Categories {
        name:string,
        desc:string,
        created_at:string,
        updated_at:string,
        item_num: number,

    }


    const {cats} = $props<{cats: Categories}>();

</script>


<div class="h-[400px] w-full overflow-y-auto overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-amber-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-10 [&::-webkit-scrollbar-thumb:hover]:bg-amber-10">
    {#each cats as c (c.name)}
        <section class="bg-amber-50 shadow-md rounded-2xl p-4 m-5 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 class="text-xl font-bold mt-4 underline decoration-2 underline-offset-4">{c.name}</h3>
            <p class="text-gray-600 mt-2"><span class="font-bold">Description:</span> {c.desc}</p>
            <p class="text-gray-600 mt-2"><span class="font-bold">Created on:</span> {c.created_at || "Not specified"}</p>
            <p class="text-gray-600 mt-2"><span class="font-bold">Updated on:</span> { c.updated_at || "No Update Yet" }</p>
            <p class="text-gray-600 mt-2"><span class="font-bold">Items Present</span>: {c.item_num}</p>
        </section>
    {/each}
</div>
