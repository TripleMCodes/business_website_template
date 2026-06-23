<script>
    import { page } from '$app/stores';
    let adminName = $state('');
    let currentPassword = $state('');
    let newPassword = $state('');
    let confirmPassword = $state('');
   
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
</section>
