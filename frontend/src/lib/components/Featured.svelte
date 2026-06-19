<script lang="ts">

    import FeatCard from "./FeatCard.svelte";

    interface Featured {
        title: string;
        description: string;
        imageUrl: string;
        price: string;
        id?: number;
        [key: string]: string | number | undefined;
    }

    //dummy data for featured items
    const featuredItems: Featured[] = [
        {
            title: 'Luxury Sofa',
            description: 'Experience ultimate comfort and style with our premium luxury sofa set.',
            imageUrl: '/piece_1.jpg',
            price: '$1,499',
            id: 1
        },
        {
            title: 'Modern Dining Table',
            description: 'Elevate your dining experience with our sleek and contemporary dining table.',
            imageUrl: '/piece_2.jpg',
            price: '$899',
            id: 2
        },
        {
            title: 'Elegant Lounge Chair',
            description: 'Transform your living room into a stylish retreat with our elegant lounge chair.',
            imageUrl: '/piece_3.jpg',
            price: '$599',
            id: 3
        }
    ];

</script>

<div class="featured-section m-5">
    <h2 class="text-3xl font-semibold mb-6 text-center m-5">Featured Pieces</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {#each featuredItems as featured (featured.id) }
            <FeatCard {featured}/>
        {/each}
    </div>
</div>



