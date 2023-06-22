import { User } from '$lib/server/mongodb/models/user';
import { json, error } from '@sveltejs/kit';
import { loginSet } from '../util';


/**
* @typedef {import("src/relay_types/user").PlainUser} UserType
* */
/**
 * @type {UserType}
 */
const requires = {'password': '', 'screen_name': ''}


/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const session = await event.locals.session.get(true) || {} 
    if ('user' in  session) {
        throw error(400)
    }
    
    const model = new User();
    
    await model.connect();
    /**
     * @type {UserType}
     * */
    const params = await event.request.json();
    if (Object.entries(params || {}).filter(function([k, v]) {
        return k in requires && !!v; 
    }).length !== 2) {
        throw error(400)
    }
    const isExist =  await model.isExist(params.screen_name);
    if (isExist === true) {
        throw  error(400);
    }
    const res = await model.create(params);
    if (!res.acknowledged) {
        throw error(500);
    }
    /**
     * @type {import('src/relay_types/api/basic').CreateResult}
     */
    const resp = {isCreated: true}
    await loginSet(event, res.insertedId)
   

    return json(resp);
};