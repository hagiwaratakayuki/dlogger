import { User } from '$lib/server/mongodb/models/user';
import { error, json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    const model = new User();
    await model.connect();
    if (await event.locals.session.exists() === true && !!(await event.locals.session.get()).user) {
        throw error(400);
    }

    /**
    * @type {string}
    * */
    const screen_name = await event.request.json();
    return json(await model.isExist(screen_name));
};