<script>
    import AdminSettings from "$lib/components/AdminSettings.svelte";
</script>

<h1 class="text-xl text-center mt-5">Welcome to the Admin dashboard</h1>
<div class="bg-amber-300 backdrop:">
    <ul>
        <li>
            <a href="adminDashboard/home-page-settings">Home Page Settings</a>
        </li>
    </ul>
</div>
<AdminSettings />