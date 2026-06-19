<script lang="ts">
    type Category = Record<string, unknown>;

    const props = $props<{ category: Category }>();
    const { category } = props;
</script>

<section class="cat-card bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
    <img src={category.imageUrl} alt={category.name} class="w-full h-auto object-cover rounded-2xl hover:shadow-xl"  />
    <h3 class="text-xl font-bold mt-4 underline decoration-2 underline-offset-4">{category.name}</h3>
    <p class="text-gray-600 mt-2"  >{category.description}</p>
    <div class="view-more-btn mt-4">
        <button class="bg-caramel text-white py-2 px-4 rounded-md hover:bg-taupe"><a href="#">View More</a></button>
    </div>
</section>