<script lang="ts">
    import { page } from '$app/stores';
    import AppSetting from './AppSetting.svelte';

    interface SettingsItem {
        id: string;
        change: string;
        input: string;
        update: string;
        endpoint: string;
        bind_var: string;
        alt: string;
    }

    let adminName = $state('');
    let currentPassword = $state('');
    let newPassword = $state('');
    let confirmPassword = $state('');

    let app_type = $state("Business");
    let app_name = $state("");
    let app_logo = $state("");
    let app_email = $state("");
    let app_number = $state("");
    let app_address = $state("");
    let app_whatsapp = $state("");
    let app_fb = $state("");
    let app_ig = $state("");
    let app_li = $state("");
    let app_x = $state("");
    let app_yt = $state("");

    const settingsItem: SettingsItem[] = [

        {   
            id: "app-name",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Name`,
            input: "text",
            update: "Update Name",
            endpoint: "admin_change_app_name",
            // svelte-ignore state_referenced_locally
            bind_var: app_name,
            alt: "text",

        },
        {   
            id: "app-logo",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Logo`,
            input: "image",
            update: "Update Logo",
            endpoint: "admin_change_app_logo",
            // svelte-ignore state_referenced_locally
            bind_var: app_logo,
            alt: "image",
        },
        {   
            id: "app-email",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Email`,
            input: "email",
            update: "Update Email",
            endpoint: "admin_change_app_email",
            // svelte-ignore state_referenced_locally
            bind_var: app_email,
            alt: "text",
        },
        {   
            id: "app-contact",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Phone Contact`,
            input: "tel",
            update: "Update Contact",
            endpoint: "admin_change_app_phone_contact",
            // svelte-ignore state_referenced_locally
            bind_var: app_number,
            alt: "text",
        },
        {   
            id: "app-address",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Address`,
            input: "text",
            update: "Update Address",
            endpoint: "admin_change_app_address",
            // svelte-ignore state_referenced_locally
            bind_var: app_address,
            alt: "text",
        },
        {   
            id: "app-wa-contact",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Whatsapp Contact`,
            input: "tel",
            update: "Update Contact",
            endpoint: "admin_change_app_wa_contact",
            // svelte-ignore state_referenced_locally
            bind_var: app_whatsapp,
            alt: "text",
        },
        {   
            id: "app-fb",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Facebook Page Url`,
            input: "text",
            update: "Update URL",
            endpoint: "admin_change_app_fb",
            // svelte-ignore state_referenced_locally
            bind_var: app_fb,
            alt: "text",
        },
        {   
            id: "app-ig",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} Instagramm URL`,
            input: "text",
            update: "Update URL",
            endpoint: "admin_change_app_ig_contact",
            // svelte-ignore state_referenced_locally
            bind_var: app_ig,
            alt: "text",
        },
        {   
            id: "app-linkedin",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} LinkedIn Profile `,
            input: "text",
            update: "Update Profile",
            endpoint: "admin_change_app_linkedin",
            // svelte-ignore state_referenced_locally
            bind_var: app_li,
            alt: "text",
        },
        {   
            id: "app-x",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} X URL `,
            input: "text",
            update: "Update URL",
            endpoint: "admin_change_app_linkedin",
            // svelte-ignore state_referenced_locally
            bind_var: app_x,
            alt: "text",
        },
        {   
            id: "app-yt",
            // svelte-ignore state_referenced_locally
            change: `Change ${app_type} YouTube URL `,
            input: "text",
            update: "Update URL",
            endpoint: "admin_change_app_yt",
            // svelte-ignore state_referenced_locally
            bind_var: app_yt,
            alt: "text",
        },

    ]

    const {settings = settingsItem} = $props<any>();






   
</script>

<section class="max-w-2xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-4xl font-bold text-[#2B1A11] mb-2">Admin Settings</h1>
        <p class="text-[#6F5037]">Manage your admin account and security</p>
    </div>

    <!-- Success/Error Message -->
    {#if $page.form?.message}
        <div class="mb-6 p-4 bg-blue-50 border-l-4 border-[#A07B63] rounded">
            <p class="text-[#2B1A11] font-medium">{$page.form.message}</p>
        </div>
    {/if}

    <!-- Change Admin Name Card -->
    <div class="bg-white rounded-2xl shadow-md p-8 mb-8 border-2 border-[#EEE7E2] hover:shadow-lg transition-shadow">
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-[#2B1A11] mb-2">Change Admin Name</h2>
            <p class="text-[#6F5037] text-sm">Update your admin account name</p>
        </div>

        <form method="POST" action="?/admin_change_name" class="space-y-4">
            <div>
                <label for="admin-name" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    New Admin Name
                </label>
                <input 
                    id="admin-name" 
                    name="admin_name" 
                    type="text" 
                    bind:value={adminName} 
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

    <!-- Change Password Card -->
    <div class="bg-white rounded-2xl shadow-md p-8 border-2 border-[#EEE7E2] hover:shadow-lg transition-shadow">
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-[#2B1A11] mb-2">Change Password</h2>
            <p class="text-[#6F5037] text-sm">Keep your account secure with a strong password</p>
        </div>

        <form method="POST" action="?/admin_change_password" class="space-y-4">
            <div>
                <label for="admin-old-password" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Current Password
                </label>
                <input 
                    id="admin-old-password" 
                    name="current_password" 
                    type="password" 
                    bind:value={currentPassword} 
                    placeholder="Enter your current password"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>

            <div>
                <label for="admin-new-password" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    New Password
                </label>
                <input 
                    id="admin-new-password" 
                    name="new_password" 
                    type="password" 
                    bind:value={newPassword} 
                    placeholder="Enter your new password"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>

            <div>
                <label for="admin-confirm-password" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Confirm New Password
                </label>
                <input 
                    id="admin-confirm-password" 
                    name="confirm_password" 
                    type="password" 
                    bind:value={confirmPassword} 
                    placeholder="Confirm your new password"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>

            <button 
                type="submit"
                class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
            >
                Change Password
            </button>
        </form>
    </div>

    <section class="setting-container bg-white rounded-2xl shadow-md p-8 border-2 border-[#EEE7E2] hover:shadow-lg transition-shadow">
        
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-[#2B1A11] mb-2">{app_type} Settings</h2>
            <p class="text-[#6F5037] text-sm">Update {app_type} Information</p>
        </div>

        {#each settings as setting (setting.id)}
            <AppSetting setting={setting} />
        {/each}

        <!-- <form method="POST" action="?/admin_change_app_name" class="space-y-4">
            <div>
                <label for="app-name" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} Name
                </label>
                <input 
                    id="app-name" 
                    name="app-name" 
                    type="text" 
                    bind:value={app_name} 
                    placeholder="Enter {app_type} name"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update Name
            </button>
        </form>

        <form method="POST" action="?/admin_change_logo" class="space-y-4 mt-5">
            <div>
                <label for="app-logo" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} Logo
                </label>
                <input 
                    id="app-logo" 
                    name="app-logo" 
                    type="image"
                    bind:value={app_logo} 
                    required
                    alt="logo"
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update Logo
            </button>
        </form>

        <form method="POST" action="?/admin_change_app_email" class="space-y-4 mt-5">
            <div>
                <label for="app-email" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} Email
                </label>
                <input 
                    id="app-email" 
                    name="app-email" 
                    type=email
                    bind:value={app_email} 
                    placeholder="Enter {app_type} email"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update Email
            </button>
        </form>

        <form method="POST" action="?/admin_change_app_phone_number" class="space-y-4 mt-5">
            <div>
                <label for="app-number" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} number
                </label>
                <input 
                    id="app-number" 
                    name="app-number" 
                    type="tel"
                    bind:value={app_number} 
                    placeholder="Enter {app_type} number"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update Number
            </button>
        </form>
        
        <form method="POST" action="?/admin_change_app_address" class="space-y-4 mt-5">
            <div>
                <label for="app-address" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} Address
                </label>
                <input 
                    id="app-address" 
                    name="app-address" 
                    type="text"
                    bind:value={app_address} 
                    placeholder="Enter {app_type} address"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update Address
            </button>
        </form>


        <form method="POST" action="?/admin_change_app_whatsapp" class="space-y-4 mt-5">
            <div>
                <label for="app-whatsap" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} Whatsapp Contact
                </label>
                <input 
                    id="app-whatsapp" 
                    name="app-whatsapp" 
                    type="text"
                    bind:value={app_whatsapp} 
                    placeholder="Enter {app_type} whatsapp contact"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update Contact
            </button>
        </form>

        <form method="POST" action="?/admin_change_app_fb" class="space-y-4 mt-5">
            <div>
                <label for="app-whatsap" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                    Change {app_type} Facebook page URL
                </label>
                <input 
                    id="app-fb" 
                    name="app-fb" 
                    type="text"
                    bind:value={app_fb} 
                    placeholder="Enter {app_type} Facebook page URL"
                    required
                    class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all"
                />
            </div>
            <button 
                    type="submit"
                    class="py-3 px-6 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
                >
                    Update URL
            </button>
        </form> -->




    </section>



</section>
