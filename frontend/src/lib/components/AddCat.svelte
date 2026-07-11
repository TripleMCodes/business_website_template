<script lang="ts">

</script>

<h2 class="text-center m-5">Add New Category</h2>

<div class="flex flex-col items-start gap-2 p-4 md:w-[420px] mx-auto">
    <form method="post" action="?/add_category" class="w-full flex flex-col gap-4">
        <label for="category-name" class="text-sm font-semibold text-gray-700">Add New Categories</label>
        <input id="category-name" type="text" class="w-full rounded-xl border border-amber-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Enter category name" />
        <label for="category-desc" class="text-sm font-semibold text-gray-700">Category Description</label>
        <textarea id="category-desc" class="w-full rounded-xl border border-amber-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Enter category description"></textarea>
        <!-- image  -->
        <label for="category-image" class="text-sm font-semibold text-gray-700">Category Image</label>
        <input id="category-image" type="file" class="w-full rounded-xl border border-amber-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
        <button type="submit" class="w-full rounded-xl bg-amber-400 px-4 py-2 text-white font-semibold hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400">
            Add Category
        </button>
    </form>
</div>