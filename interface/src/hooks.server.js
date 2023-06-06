import { sequence } from '@sveltejs/kit/hooks';
import { handleSession } from 'svelte-kit-cookie-session';
const sessionHandler = handleSession({
    secret: 'SOME_COMPLEX_SECRET_AT_LEAST_32_CHARS'
});


export const handle = sequence(sessionHandler, ({ resolve, event }) => {
    // event.locals is populated with the session `event.locals.session`
    // event.locals is also populated with all parsed cookies by handleSession, it would cause overhead to parse them again - `event.locals.cookies`.
    // Do anything you want here
    return resolve(event);
});