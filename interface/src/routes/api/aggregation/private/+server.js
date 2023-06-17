import { error, json } from '@sveltejs/kit';
import { Agggregation} from '$lib/server/mongodb/models/aggregation'

/**
* @typedef {import("../../../../relay_types/aggregation").Aggregation} AggregationType
*/

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    const id = event.url.searchParams.get('id');
    if (!id) {
        throw error(400)
    }
    const {user} = await event.locals.session.get()
    const model = new Agggregation();
    await model.connect();
    
    
    /**
     * @type {any}
     */
    const aggregation = await model.read(id);
    _checkParmision(aggregation, user);

    
   
   
    return json(aggregation);
};
/** @type {import('./$types').RequestHandler} */
export async function DELETE(event) {
    const {id} = await event.request.json();
    if (!id) {
        throw error(400)
    }
    const { user } = await event.locals.session.get()
    const model = new Agggregation();
    await model.connect();


    /**
     * @type {any}
     */
    const aggregation = await model.read(id);
    _checkParmision(aggregation, user);
    return json(await model.delete(id))


}
/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const { user } = await event.locals.session.get()
    /**
     * @type {AggregationType} 
     */
    const aggregation = await event.request.json()
    aggregation.owner = user;

    const model = new Agggregation();
    await model.connect();


    
    return json(await model.create(aggregation))
}
/** @type {import('./$types').RequestHandler} */
export async function PUT(event) {

    const { user } = await event.locals.session.get()
    /**
     * @type {{id:string, data:AggregationType}} 
     */
    const update = await event.request.json()
    

    const model = new Agggregation();
    await model.connect()
    if (!update.id) {
        throw error(400)
    }
    /**
     * @type {any}
     */
    const aggregation = await model.read(update.id);
    _checkParmision(aggregation, user);
   
    


    
    return json(await model.update(update.id, update.data))
}
/**
 * 
 * @param {AggregationType} aggregation 
 */
function _checkParmision(aggregation, user) {
   if (aggregation.owner !== user) {
        throw error(400);

   }


}