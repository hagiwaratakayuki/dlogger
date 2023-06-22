import { User } from '$lib/server/mongodb/models/user';
import { error, json } from '@sveltejs/kit';
import { loginSet } from '../util';

/** @type {import('./$types').RequestHandler} */
export async function PUT(event) {

    const model = new User();
    await model.connect();
    if (await event.locals.session.exists() === true && !!(await event.locals.session.get()).user) {
        
        throw error(400);
    }
   
    const params = await event.request.json();
    const userObj = await model.getObjectId(params);
    if (userObj === false) {
        throw error(400);
    }   
                   
    
    try {
        await loginSet(event, userObj)
        return json(true);
        
        
        
    } catch (e) {
        throw error(500)        
    }

    
};