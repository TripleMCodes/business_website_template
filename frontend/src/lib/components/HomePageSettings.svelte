<script lang="ts">
    import { page } from "$app/state";
	import { stringify } from "postcss";
    import HomeHero from "./HomeHero.svelte";


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
            update: "Update",
            endpoint: "admin_update_bg_img"
        },
        {
            id: "hero-sec-title",
            change: "Update Hero Section Title",
            input: "Text",
            update: "Update",
            endpoint: "admin_update_hero_title"
        },
        {
            id: "hero-sec-desc",
            change: "Update Hero Section Description",
            input: "Text",
            update: "Update",
            endpoint: "admin_update_hero_description"
        },
        {
            id: "hero-sec-desc",
            change: "Update Hero Section Description",
            input: "Text",
            update: "Update",
            endpoint: "admin_update_hero_description"
        }

    ]

    
    
</script>

<p>This is where you can update the contents of the Home Page</p>

<section class="max-w-2xl mx-auto px-4 py-8">

    <div class="bg-white rounded-2xl shadow-md p-8 mb-8 border-2 border-[#EEE7E2] hover:shadow-lg transition-shadow">
        <form method="POST" action="?/admin_change_name" class="space-y-4">
            <div>
                <label for="admin-name" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    New Admin Name
                </label>
                <input 
                    id="admin-name" 
                    name="admin_name" 
                    type="text" 
                
                    placeholder="Enter new admin name"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                type="submit"
                class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
            >
                Save Name
            </button>
        </form>
    </div>

    <HomeHero />
    
</section>