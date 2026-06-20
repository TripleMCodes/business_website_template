<script lang="ts">
    import TestCard from './TestCard.svelte';
    import { slide, fade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    interface Testimonial {
        id: number;
        name: string;
        testimonial: string;
        social?: string;
        rating: number;
        avatar?: string;
    }

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Maya Thompson',
            testimonial: 'Arbour & Searth transformed our living room — beautiful, warm, and perfectly balanced.',
            social: '@mayathompson',
            rating: 5
        },
        {
            id: 2,
            name: 'Diego Alvarez',
            testimonial: 'Professional, thoughtful design and attentive to every detail. Highly recommended.',
            social: '@diegoa',
            rating: 5
        },
        {
            id: 3,
            name: 'Lina Park',
            testimonial: 'A pleasure to work with — the result exceeded our expectations.',
            social: '@linapark',
            rating: 4
        }
    ];

    let index = $state(0);

    const next = () => { index = (index + 1) % testimonials.length; };
    const prev = () => { index = (index - 1 + testimonials.length) % testimonials.length; };
    const goTo = (i: number) => { index = i % testimonials.length; };
</script>

<section class="testimonials py-12">
    <div class="container mx-auto px-6">
        <h2 class="text-2xl font-semibold mb-6 text-center">What our customers say</h2>

        <div class="relative max-w-3xl mx-auto">
            <div class="overflow-hidden">
                {#key testimonials[index].id}
                    <div in:slide={{ duration: 600, easing: cubicInOut }} out:fade={{ duration: 300, easing: cubicInOut }} class="w-full flex items-center justify-center">
                        <TestCard testimonial={testimonials[index]} />
                    </div>
                {/key}
            </div>

            <button aria-label="Previous" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-2 rounded-md shadow" onclick={prev}>&larr;</button>
            
            <div class="mt-6 flex items-center justify-center">
                {#each testimonials as _, i}
                    <button aria-label={`Go to testimonial ${i+1}`} class="w-3 h-3 rounded-full" onclick={() => goTo(i)} style="background-color: {i === index ? 'var(--color-caramel)' : '#d1d5db'}"></button>
                {/each}
            </div>

            <button aria-label="Next" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-2 rounded-md shadow" onclick={next}>&rarr;</button>

        </div>
    </div>
</section>


