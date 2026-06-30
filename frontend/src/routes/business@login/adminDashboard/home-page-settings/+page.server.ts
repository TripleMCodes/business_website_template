import {fail, type Cookies} from '@sveltejs/kit';
import { get_url } from '$lib/url_vars/url_vars';
import { isAwaitExpression } from 'typescript';

function backendHeaders(cookies: { get: (arg0: string) => any; }) {
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');

    let cookieHeader = '';

    if (accessToken) {
        cookieHeader + `access_token=${accessToken}`;
    }

    if (refreshToken){
        if (cookieHeader.length > 0) cookieHeader += '; ';
        cookieHeader += `refresh_token=${refreshToken}`;
    }

    return {
        'Content-Type': 'application',
        Cookie: cookieHeader,
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
    
    return { message: data?.business_name ? `Updated successfully.` : data?.message };
}



export const actions = {
    admin_update_bg_img: async ({request, cookies}) => {
        const formData = await request.formData();
        return updateHomePage(cookies, "background-image", "background-image", formData);
    },

    admin_update_hero_title: async ({request, cookies}) => {
        const formData = await request.formData();
        return updateHomePage(cookies, "hero-sec-title", "title", formData);
    },

    admin_update_hero_description: async ({request, cookies}) => {
        const formData = await request.formData();
        return updateHomePage(cookies, "hero-sec-desc", "description", formData);
    }, 

    // admin_update_hero_description: async ({request, cookies}) => {
    //     const formData = await request.formData();
    //     return updateHomePage(cookies, )
    // }

}

