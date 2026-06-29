import {fail} from '@sveltejs/kit';
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

