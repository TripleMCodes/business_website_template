import { get_url } from "$lib/url_vars/url_vars";



export async function load({ fetch }) {
	try {
		const response = await fetch(`${get_url()}/api/app/settings/app/home`);
		if (!response.ok) {
			throw new Error('Failed to fetch homepage content');
		}
		const homepageContent = await response.json();
		return { homepageContent };
	} catch (error) {
		console.error('Error loading homepage content:', error);
		return {
			homepageContent: {
				image_url: '/bg-img2.jpg',
				hero_section_title: 'Crafting beautiful spaces with thoughtful design and natural materials.',
				hero_section_description: 'Interior styling, landscape accents, and bespoke home details that feel warm, elegant, and timeless.'
			}
		};
	}
}
