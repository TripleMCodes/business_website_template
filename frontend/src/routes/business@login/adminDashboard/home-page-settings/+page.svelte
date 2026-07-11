<script lang='ts'>
    import HomePageSettings from '$lib/components/HomePageSettings.svelte';
    import CatSettings from '$lib/components/CatSettings.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    const homepageContent = data.homepageContent;
</script>

<h1>Home Page Settings</h1>


<HomePageSettings {homepageContent}/>

<CatSettings />
