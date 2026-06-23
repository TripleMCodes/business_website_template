import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { get_url } from '$lib/url_vars/url_vars.js';

export const actions: Actions = {
    admin_login: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();

        const username = formData.get('username');
        const password = formData.get('password');

        if (!username || !password) {
            return fail(400, { message: 'Missing admin name or password' });
        }

        const body = new URLSearchParams();
        body.set('username', username.toString());
        body.set('password', password.toString());

        const res = await fetch(`${get_url()}/api/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body.toString()
        });

        if (!res.ok) {
            return fail(400, { message: 'Admin login failed. Invalid credentials.' });
        }

        const data = await res.json();

        cookies.set('access_token', data.access_token, {
            httpOnly: true,
            secure: !dev,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 15
        });

        cookies.set('refresh_token', data.refresh_token, {
            httpOnly: true,
            secure: !dev,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });

        // Success → redirect to the admin dashboard path
        throw redirect(303, '/business@login/adminDashboard');
    }
};
