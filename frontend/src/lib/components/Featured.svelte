<script lang="ts">
    import FeatCard from "./FeatCard.svelte";

    interface FeaturedItem {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
        price: string;
    }

    const dummyItems: FeaturedItem[] = [
        {
            id: 1,
            title: "Modern Oak Dining Table",
            description: "Handcrafted oak dining table with a contemporary finish.",
            imageUrl: "/piece_2.jpg",
            price: "R8,999"
        },
        {
            id: 2,
            title: "Luxury Lounge Chair",
            description: "Comfortable upholstered chair perfect for modern interiors.",
            imageUrl: "/piece_1.jpg",
            price: "R4,299"
        },
        {
            id: 3,
            title: "Minimalist Coffee Table",
            description: "Elegant coffee table featuring clean lines and durability.",
            imageUrl: "/piece_3.jpg",
            price: "R2,799"
        }
    ];

    const { items = dummyItems } = $props<any>();
</script>

<div class="featured-section m-5">
    <h2 class="text-3xl font-semibold mb-6 text-center m-5">
        Featured Pieces
    </h2>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {#each items as featured (featured.id)}
            <FeatCard {featured} />
        {/each}
    </div>
</div>