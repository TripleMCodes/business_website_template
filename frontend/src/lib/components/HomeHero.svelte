<script>
	import { onMount } from "svelte";
    import {get_url} from "$lib/url_vars/url_vars"

    const { homepageContent = {
        image_url: '/bg-img2.jpg',
        hero_section_title: 'Crafting beautiful spaces with thoughtful design and natural materials.',
        hero_section_description: 'Interior styling, landscape accents, and bespoke home details that feel warm, elegant, and timeless.'
    } } = $props();

    let bgImage = $state('/bg-img2.jpg');

</script>

<section class="home-hero relative bg-cover bg-center h-screen w-full" style="background-image: url({bgImage});">
    <div class="absolute inset-0 bg-black/25"></div>
    <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p class="mb-4 text-md uppercase tracking-[0.4em] text-caramel">Welcome to Arbour & Searth</p>
        <h1 class=" max-w-3xl text-4xl font-semibold md:text-6xl">{homepageContent?.hero_section_title}</h1>
        <p class="mt-6 max-w-2xl text-base text-white/90 md:text-lg">{homepageContent?.hero_section_description}</p>
        <div class="cta-btn">
            <button class="bg-caramel text-white py-2 px-4 rounded-md hover:bg-taupe">Explore Our Work</button>
        </div>
    </div>
   
</section>