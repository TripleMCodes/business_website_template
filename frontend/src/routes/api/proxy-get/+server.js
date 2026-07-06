import { get_url } from "$lib/url_vars/url_vars";

export async function GET({url, fetch, cookies}){
    const endpoint  = url.searchParams.get('endpoint');
    const accessToken = cookies.get('access_token');

    // Forward any extra query params (except 'endpoint')
    const forwardParams = new URLSearchParams();
    url.searchParams.forEach((value, key) => {
        if (key !== 'endpoint') forwardParams.set(key, value);
    });

    const query = forwardParams.toString();
    const fullUrl = `${get_url()}${endpoint}${query ? '?' + query : ''}`;

    const request = await fetch(fullUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Cookie": `access_token=${accessToken}`
        }
    });

    const data = await request.json();
    return new Response(JSON.stringify(data),
    {
        status: request.status,
        headers: {'Content-Type': 'application/json'}
    });
}