<script>
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'

    let username = $state("")
    let password = $state("")
</script>

<div class="min-h-screen flex items-center justify-center px-4 bg-[#F3EFEC]">
    <div class="w-full max-w-md">
        <!-- Card Container -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#EEE7E2]">
            <!-- Header -->
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-[#2B1A11] mb-2">Admin Login</h1>
                <p class="text-[#6F5037]">Access your business dashboard</p>
            </div>

            <!-- Error Message -->
            {#if $page.form?.message}
                <div class="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                    <p class="text-red-700 font-medium">{$page.form.message}</p>
                </div>
            {/if}

            <!-- Login Form -->
            <form method="POST" action="?/admin_login" use:enhance class="space-y-6">
                <!-- Username Field -->
                <div>
                    <label for="username" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                        Admin Name
                    </label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Enter your admin name"
                        required 
                        bind:value={username}
                        class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all duration-200"
                    >
                </div>

                <!-- Password Field -->
                <div>
                    <label for="password" class="block text-sm font-semibold text-[#2B1A11] mb-2">
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password"
                        required 
                        bind:value={password}
                        class="w-full px-4 py-3 rounded-lg border-2 border-[#EEE7E2] bg-[#F3EFEC] text-[#2B1A11] placeholder-[#B89F8A] focus:outline-none focus:border-[#A07B63] focus:ring-2 focus:ring-[#A07B63] focus:ring-opacity-20 transition-all duration-200"
                    >
                </div>

                <!-- Submit Button -->
                <button 
                    type="submit"
                    class="w-full py-3 px-4 rounded-lg bg-[#A07B63] text-white font-semibold hover:bg-[#6F5037] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Login
                </button>
            </form>

            <!-- Footer -->
            <div class="mt-6 text-center text-sm text-[#6F5037]">
                <p>Need help? <span class="font-semibold text-[#A07B63]">Contact support</span></p>
            </div>
        </div>
    </div>
</div>
