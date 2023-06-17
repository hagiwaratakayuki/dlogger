import { error } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { InMemorySessionRepository, handleSession } from '@sveltekit-statefull-session/core';

const repository = new InMemorySessionRepository({ ttl: '24h' });
const sessionHandle = handleSession(repository, { debug: import.meta.env.DEV });
/**
 * 
 * @type {import("@sveltejs/kit").Handle}  
 */
const authHandle = async function({event, resolve}){
    if (event.url.pathname.split('/').indexOf('private') !== -1) {
        if ((!import.meta.env.DEV || event.url.searchParams.get('strict')) && !(await event.locals.session.get())?.user){
            throw error(404);
        }

    }
    return await resolve(event);

}

export const handle = sequence(sessionHandle, authHandle)