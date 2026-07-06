import { get_url } from "$lib/url_vars/url_vars";

export async function POST({ request, fetch, cookies }) {
    const { endpoint, body } = await request.json();
    
    const accessToken = cookies.get('access_token');
    console.log('access_token:', accessToken);

    if (!accessToken) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }


    const res = await fetch(`${get_url()}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `access_token=${accessToken}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
    });
}