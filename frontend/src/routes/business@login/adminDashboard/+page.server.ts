// @ts-nocheck
import { fail } from '@sveltejs/kit';
import { get_url } from '$lib/url_vars/url_vars.js';

function backendHeaders(cookies) {
  const accessToken = cookies.get('access_token');
  const refreshToken = cookies.get('refresh_token');
  let cookieHeader = '';

  if (accessToken) {
    cookieHeader += `access_token=${accessToken}`;
  }

  if (refreshToken) {
    if (cookieHeader.length > 0) cookieHeader += '; ';
    cookieHeader += `refresh_token=${refreshToken}`;
  }

  return {
    'Content-Type': 'application/json',
    Cookie: cookieHeader,
  };
}

// export const load = async ({ fetch, cookies }) => {
//   try {
//     const usersRes = await fetch(`${get_url()}/api/admin/users`, {
//       headers: backendHeaders(cookies),
//     });
//     let users = [];
//     if (usersRes.ok) {
//       users = await usersRes.json();
//     }

//     const songsRes = await fetch(`${get_url()}/api/admin/songs`, {
//       headers: backendHeaders(cookies),
//     });
//     let totalSongs = [];
//     if (songsRes.ok) {
//       totalSongs = await songsRes.json();
//     }

//     return { 
//       users,
//       totalSongs,
//       logo: {
//         title: 'M-Prosody',
//         tagline: 'Unleash your words, craft your flow 🎤'
//       },
//       urls: {
//         writing: false,
//         login: false,
//         signup: false,
//         songs: false
//       }
//     };
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     return { 
//       users: [],
//       songs: [],
//       logo: {
//         title: 'M-Prosody',
//         tagline: 'Unleash your words, craft your flow 🎤'
//       },
//       urls: {
//         writing: false,
//         login: false,
//         signup: false,
//         songs: false
//       }
//     };
//   }
// };

// async function forwardRequest({ request, cookies, path, method = 'PATCH' }) {
//   const formData = await request.formData();
//   const payload = {};
//   for (const [key, value] of formData.entries()) {
//     if (key === 'blocked') {
//       payload[key] = value === 'true';
//     } else if (key === 'user_id') {
//       payload[key] = Number(value);
//     } else {
//       payload[key] = value;
//     }
//   }

//   const url = `${get_url()}${path}`;
//   const body = JSON.stringify(payload);
//   const res = await fetch(url, {
//     method,
//     headers: backendHeaders(cookies),
//     body,
//   });

//   const data = await res.json().catch(() => ({ message: 'Backend request failed.' }));
//   if (!res.ok) {
//     return fail(res.status, { message: data.detail || data.message || 'Request failed.' });
//   }

//   return { message: data.message || 'Saved successfully.' };
// }

export const actions = {
  admin_change_name: async ({ request, cookies }) => {
    return forwardRequest({ request, cookies, path: '/api/admin/settings/name' });
  },

  admin_change_password: async ({ request, cookies }) => {
    return forwardRequest({ request, cookies, path: '/api/admin/settings/password' });
  },

  admin_change_api: async ({ request, cookies }) => {
    return forwardRequest({ request, cookies, path: '/api/admin/settings/api' });
  },

//   admin_change_user_password: async ({ request, cookies }) => {
//     const formData = await request.formData();
//     const userId = formData.get('user_id');
//     if (!userId) {
//       return fail(400, { message: 'User is required.' });
//     }

//     const payload = {
//       new_password: formData.get('new_password'),
//     };

//     const res = await fetch(`${get_url()}/api/admin/users/${userId}/password`, {
//       method: 'PATCH',
//       headers: backendHeaders(cookies),
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json().catch(() => ({ message: 'Backend request failed.' }));
//     if (!res.ok) {
//       return fail(res.status, { message: data.detail || data.message || 'Request failed.' });
//     }

//     return { message: data.message || 'User password updated successfully.' };
//   },

//   admin_toggle_user_block: async ({ request, cookies }) => {
//     const formData = await request.formData();
//     const userId = formData.get('user_id');
//     const blocked = formData.get('blocked') === 'true';

//     if (!userId) {
//       return fail(400, { message: 'User is required.' });
//     }

//     const res = await fetch(`${get_url()}/api/admin/block/user/${userId}`, {
//       method: 'PATCH',
//       headers: backendHeaders(cookies),
//       body: JSON.stringify({ blocked }),
//     });

//     const data = await res.json().catch(() => ({ message: 'Backend request failed.' }));
//     if (!res.ok) {
//       return fail(res.status, { message: data.detail || data.message || 'Request failed.' });
//     }

//     return { message: data.message || 'User block state updated successfully.' };
//   },

//   admin_delete_song: async ({ request, cookies }) => {
//     const formData = await request.formData();
//     const songId = formData.get('song_id');
//     if (!songId) {
//       return fail(400, { message: 'Song ID is required.' });
//     }

//     const res = await fetch(`${get_url()}/api/admin/songs/${songId}`, {
//       method: 'DELETE',
//       headers: backendHeaders(cookies),
//     });

//     const data = await res.json().catch(() => ({ message: 'Backend request failed.' }));
//     if (!res.ok) {
//       return fail(res.status, { message: data.detail || data.message || 'Request failed.' });
//     }

//     return { message: data.message || 'Song deleted successfully.' };
//   },
};
