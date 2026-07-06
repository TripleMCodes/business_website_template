import { get_url } from "$lib/url_vars/url_vars";

export async function DELETE({ request, fetch, cookies }) {
    const { endpoint } = await request.json();
    const accessToken = cookies.get('access_token');

    if (!accessToken) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const res = await fetch(`${get_url()}${endpoint}`, {
        method: 'DELETE',
        headers: {
            'Cookie': `access_token=${accessToken}`
        }
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
    });
}