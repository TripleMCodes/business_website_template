import {fail, type Cookies} from '@sveltejs/kit';
import { get_url } from '$lib/url_vars/url_vars';
import { isAwaitExpression } from 'typescript';



function backendHeaders(cookies: { get: (arg0: string) => any; }) {
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');
    
    let cookieHeader = '';
    
    if (accessToken) {
        cookieHeader += `access_token=${accessToken}`;
    }
    
    if (refreshToken){
        if (cookieHeader.length > 0) cookieHeader += '; ';
        cookieHeader += `refresh_token=${refreshToken}`;
    }
    
    return {
        'Content-Type': 'application/json',
        Cookie: cookieHeader,
    }
}

export async function load({ fetch, cookies }){
    try{
        const response = await fetch(`${get_url()}/api/app/settings/app/home`,{
            method: 'GET',
            headers: backendHeaders(cookies),
        });
        if (!response.ok){
            throw new Error("Failed to homepage content");
        }

        const homepageContent = await response.json();
        return { homepageContent};
    }
    catch (error){
        console.error("Error loading homepage content:", error);
        return {
            homepageContent: {
                image_url: '/bg-img2.jpg',
                hero_section_title: 'Crafting beautiful spaces with thoughtful design and natural materials.',
                hero_section_description: 'Interior styling, landscape accents, and bespoke home details that feel warm, elegant, and timeless.'
            }
        };
    }
}

async function updateHomePage(
    cookies: Cookies,
    formFieldId: string,
    payloadKey: string,
    formData: FormData

) {

    const value = formData.get(formFieldId);

    if (!value){
        return fail(400, {message: "value required."});
    }

    const payload = {
        [payloadKey]: value,
    };

    const res = await fetch(`${get_url()}/api/app/settings/app/home`, {
        method: 'PATCH',
        headers: backendHeaders(cookies),
        body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => {
        console.log(`Error - couldn't update ${payloadKey}`);
        return null;
    })

    if (!res.ok){
        console.log(`Error - couldn't update ${payloadKey}`);
        return fail(res.status, { message: data?.detail ?? `Couldn't update ${payloadKey}.` }); 
    }
    
    return {message: `Updated successfully.`};
}


async function addCategory(
    cookies: Cookies,
    formFieldId: string,
    payloadKey: string,
    formData: FormData
) {
    // const value = formData.get(formFieldId);
    const name = formData.get('category-name');
    const desc = formData.get('category-desc');
    const image = formData.get('category-image');

    // check if all required fields are present
    if (!name || !desc) {
        return fail(400, { message: "All fields are required." });
    }

    // // check if file is an image
    // let imageExtensions = [ ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".tiff", ".svg" ];
    // if (image instanceof File && !imageExtensions.some(ext => image.name.endsWith(ext))) {
    //     return fail(400, { message: "Uploaded file must be an image." });
    // }


    // create payload
    const payload = {
        [payloadKey]: {
            name: name,
            description: desc,
            image: image
        }
    };


    // if (!value) {
    //     return fail(400, { message: "Value required." });
    // }

    // const payload = {
    //     [payloadKey]: value,
    // };

    const res = await fetch(`${get_url()}/api/app/settings/add/home/category`, {
        method: 'POST',
        headers: backendHeaders(cookies),
        body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => {
        console.log(`Error - couldn't add category`);
        return null;
    });

    if (!res.ok) {
        console.log(`Error - couldn't add category`);
        return fail(res.status, { message: data?.detail ?? `Couldn't add category.` });
    }

    return { message: `Category added successfully.` };
}


export const actions = {
    admin_update_bg_img: async ({request, cookies}) => {
        const formData = await request.formData();
        return updateHomePage(cookies, "background-image", "image_url", formData);
    },

    admin_update_hero_title: async ({request, cookies}) => {
        const formData = await request.formData();
        return updateHomePage(cookies, "hero-sec-title", "hero_section_title", formData);
    },

    admin_update_hero_description: async ({request, cookies}) => {
        const formData = await request.formData();
        return updateHomePage(cookies, "hero-sec-desc", "hero_section_description", formData);
    }, 
    add_category: async ({request, cookies}) => {
        const formData = await request.formData();
        return addCategory(cookies, "add-category", "category", formData);
    }



    // admin_update_hero_description: async ({request, cookies}) => {
    //     const formData = await request.formData();
    //     return updateHomePage(cookies, )
    // }

}

