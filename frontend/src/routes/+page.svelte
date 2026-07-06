<script lang="ts">
    import HomeHero from "$lib/components/HomeHero.svelte";
    import Category from "$lib/components/Category.svelte";
    import Featured from "$lib/components/Featured.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    // svelte-ignore state_referenced_locally
    const homepageContent = data.homepageContent;
</script>

<HomeHero {homepageContent} />
<Category />
<Featured />
<Testimonials />

