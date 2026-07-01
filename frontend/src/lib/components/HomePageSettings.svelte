<script lang="ts">
    import { page } from "$app/stores";
	import { stringify } from "postcss";
    import HomeHero from "./HomeHero.svelte";
	import AppSetting from "./AppSetting.svelte";

    interface SettingsItem {
            id: string;
            change: string;
            input: string;
            update: string;
            endpoint: string;
            bind_var?: string;
            alt?: string
        }

    const settingsItem: SettingsItem[] = [
        {
            id: "background-image",
            change: "Update background image",
            input: "image",
            update: "Background Image",
            endpoint: "admin_update_bg_img"
        },
        {
            id: "hero-sec-title",
            change: "Update Hero Section Title",
            input: "Text",
            update: "Title",
            endpoint: "admin_update_hero_title"
        },
        {
            id: "hero-sec-desc",
            change: "Update Hero Section Description",
            input: "Text",
            update: "Description",
            endpoint: "admin_update_hero_description"
        },

    ]

    const {settings = settingsItem} = $props<any>();
    
</script>

<p>This is where you can update the contents of the Home Page</p>

<section class="max-w-2xl mx-auto px-4 py-8">

    <!-- Success/Error Message -->
    {#if $page.form?.message}
        <div class="mb-6 p-4 bg-blue-50 border-l-4 border-[#A07B63] rounded">
            <p class="text-[#2B1A11] font-medium">{$page.form.message}</p>
        </div>
    {/if}
    
    <section class="setting-container bg-white rounded-2xl shadow-md p-8 border-2 border-[#EEE7E2] hover:shadow-lg transition-shadow">
        {#each settings as setting (setting.id)}
                <AppSetting setting={setting} />
        {/each}
    </section>

    <HomeHero />
    
</section>