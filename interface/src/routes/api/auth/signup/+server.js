import { User } from '$lib/server/mongodb/models/user';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const model = new User();
    await model.connect();
    
    const params = await event.request.json();

    return json({});
};