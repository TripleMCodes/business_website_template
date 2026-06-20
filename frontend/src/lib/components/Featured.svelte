<script lang="ts">
    import FeatCard from "./FeatCard.svelte";

    interface FeaturedItem {
        title: string;
        description: string;
        imageUrl: string;
        price: string;
        id?: number;
        [key: string]: string | number | undefined;
    }

    interface Props {
        items?: FeaturedItem[];
    }

    const { items = [] } = $props<Props>();
</script>

<div class="featured-section m-5">
    <h2 class="text-3xl font-semibold mb-6 text-center m-5">Featured Pieces</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {#each items as featured (featured.id) }
            <FeatCard {featured}/>
        {/each}
    </div>
</div>



