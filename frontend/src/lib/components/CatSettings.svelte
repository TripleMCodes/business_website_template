<script lang="ts">

    import AppSetting from "./AppSetting.svelte";
    import CurrentCat from "./CurrentCat.svelte";
    import CatsDisplay from "$lib/components/Category.svelte";
    import AddCat from "./AddCat.svelte";
    interface Categories {
        name:string,
        desc:string,
        created_at:string,
        updated_at:string,
        item_num: number,

    }



    const categories: Categories[] = [
        {
            name: "Interior design",
            desc: "Transform your living space with our expert interior design.",
            created_at: '10 July 2026',
            updated_at:'',
            item_num:2,
        },
        {
            name: "Landscape design",
            desc: "Create stunning outdoor enviroments with our landscape design expertise.",
            created_at: '10 July 2026',
            updated_at:'',
            item_num:2,
        },
        {
            name: "Custom Furniture",
            desc: "Craft unique, bespoke furniture pieces tailored to your style and needs.",
            created_at: '10 July 2026',
            updated_at:'',
            item_num:2,
        },
    ]

    const {cats = categories} = $props<{cats: Categories}>();

</script>


<section class="max-w-2xl mx-auto px-4 py-8 bg-white rounded-2xl shadow-md p-8 border-2 border-[#EEE7E2] hover:shadow-lg transition-shadow">

    <section class="">
        <h2 class="text-2xl font-bold text-center m-5">Current Categories</h2>
        <CurrentCat {cats}/>
    </section>


    <AddCat />


    <h2 class="text-2xl font-bold text-center m-5">All Categories Display</h2>

    <CatsDisplay />




</section>
