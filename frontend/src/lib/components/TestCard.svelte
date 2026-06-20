<script lang="ts">
    type Testimonial = {
        id: number;
        name: string;
        testimonial: string;
        social?: string;
        rating: number;
        avatar?: string;
    };

    const props = $props<{ testimonial: Testimonial }>();
    const { testimonial } = props;

    const initials = (name: string) => name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase();
</script>

<article class="test-card bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 max-w-md">
    <div class="flex items-center gap-4">
        {#if testimonial.avatar}
            <img src={testimonial.avatar} alt={testimonial.name} class="w-12 h-12 rounded-full object-cover" />
        {:else}
            <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">{initials(testimonial.name)}</div>
        {/if}

        <div class="flex-1">
            <div class="flex items-center justify-between">
                <div class="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                <div class="text-xs text-gray-500">{testimonial.social}</div>
            </div>
            <div class="text-yellow-500 mt-1">{Array(testimonial.rating).fill('★').join('')}</div>
        </div>
    </div>

    <p class="text-gray-700">“{testimonial.testimonial}”</p>
</article>

