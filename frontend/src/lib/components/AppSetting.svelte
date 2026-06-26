<script lang="ts">

    interface SettingsItem {
            id: string;
            change: string;
            input: string;
            update: string;
            endpoint: string;
            bind_var: string;
            alt: string
        }

    let app_type = $state("")
    

        const { setting } = $props<{ setting: SettingsItem }>();
</script>

<form method="POST" action="?/{setting.endpoint}" class="space-y-4 mt-5">
    <div>
        <label for={setting.id} class="block text-sm font-semibold text-[#2B1A11] mb-2">
           {setting.change}
        </label>
        <input 
            id={setting.id} 
            name={setting.id} 
            type={setting.input} 
            bind:value={setting.bind_var} 
            placeholder="Enter {app_type} name"
            required
            alt={setting.alt}
            class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
        />
    </div>
    <button 
            type="submit"
            class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
        >
            Update {setting.update}
    </button>
</form>