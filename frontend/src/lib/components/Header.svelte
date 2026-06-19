<script>
    import {resolve} from '$app/paths';
    import { onMount } from 'svelte';
    let imgurl = ""; // add dynamic path to logo later

    let current = '/';
    onMount(() => {
        if (typeof location !== 'undefined') current = location.pathname;
        const onPop = () => { current = location.pathname; };
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    });

    const linkClass = (/** @type {string} */ path) => `nav-link px-2 py-1 ${current === path ? 'text-caramel font-semibold underline decoration-2 underline-offset-2' : 'text-gray-800 hover:text-caramel'}`;
</script>

<header class="bg-white shadow-md flex items-center justify-between p-4">
    <div class="logo-container">
        {#if imgurl === ""}
            <!-- <img src={resolve('/logo.png')} alt="Logo" class="logo" /> -->
            <!-- us default logo for now, will add dynamic path later -->
            <h1 class="m-5 shadow-md p-4 border border-gray-300 rounded-lg"><span class="text-caramel text-2xl">A</span><span class="text-taupe text-2xl">&</span><span class="text-brown text-2xl">S</span></h1>
        {:else}
            <img src={imgurl} alt="Logo" class="logo" />
        {/if}
    </div>

    <div class="nav-container">
        <!-- Navigation links will be added here -->
        <nav class="nav flex-row gap-4">
            <ul class="nav-list list-none m-0 p-0 flex flex-row gap-4">
                <li class="nav-item"><a href="/" class={linkClass('/')}>Home</a></li>
                <li class="nav-item"><a href="/services" class={linkClass('/services')}>Services</a></li>
                <li class="nav-item"><a href="/about" class={linkClass('/about')}>About Us</a></li>
                <li class="nav-item"><a href="/contact" class={linkClass('/contact')}>Contact</a></li>
            </ul>   
        </nav>
    </div>

    <div class="search-box-container">
        <input type="text" placeholder="Search..." class="search-box focus:border-caramel focus:ring-caramel active:border-caramel border border-gray-300 rounded-md p-2" />
    </div>
</header>