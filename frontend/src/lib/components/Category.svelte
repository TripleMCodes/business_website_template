<script lang="ts">

    interface Category {
        name: string;
        description: string;
        imageUrl: string;
        id?: number;
        [key: string]: string | number | undefined;
    }

    // dummy data for categories
    const categories: Category[] = [
        {
            name: 'Interior Design',
            description: 'Transform your living spaces with our expert interior design services.',
            imageUrl: '/interior.jpg',
            id: 1 
        },
        {
            name: 'Landscape Design',
            description: 'Create stunning outdoor environments with our landscape design expertise.',
            imageUrl: '/landscape.jpg',
            id: 2
        },
        {
            name: 'Custom Furniture',
            description: 'Craft unique, bespoke furniture pieces tailored to your style and needs.',
            imageUrl: '/custom.jpg',
            id: 3   
        }
    ];

    import CatCard from '$lib/components/CatCard.svelte'

</script>

<div class="category-section">
    <h2 class="text-3xl font-semibold mb-6 text-center m-5">Categories</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {#each categories as category (category.id)}
            <CatCard {category} />
        {/each}
    </div>

</div>