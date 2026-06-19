<script lang="ts">
// @ts-nocheck

	import { resolve } from "$app/paths";


    let businessName = $state("Arbour & Searth"); //add dynamic name later

    interface SocialLink {
        name: string;
        url: string;
        icon: string; // path to the icon image
        isActive: boolean; // to determine if the link is active or not
    }

    let socialLinks: SocialLink[] = [
        { name: "Facebook", url: "#", icon: resolve('/facebook-50.png'), isActive: true },
        { name: "X", url: "#", icon: resolve('/x-50.png'), isActive: true },
        { name: "Instagram", url: "#", icon: resolve('/instagram-50.png'), isActive: true },
        { name: "LinkedIn", url: "#", icon: resolve('/linkedin-50.png'), isActive: true },
        { name: "YouTube", url: "#", icon: resolve('/youtube-50.png'), isActive: true },
        { name: "WhatsApp", url: "#", icon: resolve('/whatsapp-50.png'), isActive: true }
    ];
    //add dynamic active state later, for now all links are active



</script>

<footer class="bg-white shadow-md flex items-center justify-between p-4 flex-col md:flex-row">
    <div class="footer-logo">
        <h1 class="m-5 shadow-md p-4 border border-gray-300 rounded-lg"><span class="text-caramel text-2xl">Arbour</span><span class="text-taupe text-2xl">&</span><span class="text-brown text-2xl">Searth</span></h1>
    </div>
    <div class="business-socials">
        <ul class="social-list list-none m-0 p-0 flex flex-row gap-4">
            {#each socialLinks as link}
                {#if link.isActive}
                    <li class="social-item"><a href={link.url} class="text-gray-800 hover:text-caramel">
                        <img src={link.icon} alt={link.name} class="logo" />
                    </a></li>
                {/if}
            {/each}
        </ul>
    </div>
    <div class="footer-content">
        <p>&copy; 2024 {businessName}. All rights reserved.</p>
    </div>
</footer>