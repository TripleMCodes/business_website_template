<script lang="ts">
    type featured = Record<string, unknown>;

    const props = $props<{ featured: featured }>();
    const { featured } = props;
</script>

<div class="featured-car bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
    <img src={featured.imageUrl} alt={featured.title} class="w-full h-auto object-cover rounded-2xl hover:shadow-xl" />
    <h3 class="text-xl font-bold mt-4 underline decoration-2 underline-offset-4">{featured.title}</h3>
    <p class="text-gray-600 mt-2">{featured.description}</p>
    <p class="text-gray-600 mt-2">{featured.price}</p>
    <div class="view-more-btn mt-4">
        <button class="bg-caramel text-white py-2 px-4 rounded-md hover:bg-taupe"><a href="#">View More</a></button>
    </div>
</div>