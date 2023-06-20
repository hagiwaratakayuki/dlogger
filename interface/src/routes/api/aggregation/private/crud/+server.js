import { error, json } from '@sveltejs/kit';
import { Aggregation } from '$lib/server/mongodb/models/aggregation'
import { _checkExist, projectionTo } from '../util';

/**
* @typedef {import("../../../../../relay_types/aggregation").Aggregation} AggregationType
*/

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    const id = event.url.searchParams.get('id');
    if (!id) {
        throw error(400)
    }
    const { user } = await event.locals.session.get()
    const model = new Aggregation();
    await model.connect();


    /**
     * @type {any}
     */
    const aggregation = await model.read(id);
    if (!aggregation?._id) {
        throw error(404);
    }
    _checkExist(aggregation);
    _checkParmision(aggregation, user);




    return json(projectionTo(aggregation));
};
/** @type {import('./$types').RequestHandler} */
export async function DELETE(event) {
    const { id } = await event.request.json();
    if (!id) {
        throw error(400)
    }
    const { user } = await event.locals.session.get()
    const model = new Aggregation();
    await model.connect();


    /**
     * @type {any}
     */
    const aggregation = await model.read(id);
    _checkExist(aggregation);
    _checkParmision(aggregation, user);
    const deleteResult = await model.delete(id);
    if ( deleteResult.acknowledged === false) {
        throw error(500);
    }
    /**
     * @type {import("../../../../../relay_types/api/basic.d.ts").DeleteResult}
     */
    const resp = {isDeleted: true}
    return json(resp);


}
/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const { user } = await event.locals.session.get()
    /**
     * @type {AggregationType} 
     */
    const aggregation = await event.request.json()
    aggregation.owner = user;

    const model = new Aggregation();
    await model.connect();
    const createResult = await model.create(aggregation);
    if (createResult.acknowledged === false) {
        throw(500)
    }
    return json({id:createResult.insertedId});
}
/** @type {import('./$types').RequestHandler} */
export async function PUT(event) {

    const { user } = await event.locals.session.get()
    /**
     * @type {{id:string, data:AggregationType}} 
     */
    const update = await event.request.json()


    const model = new Aggregation();
    await model.connect()
    if (!update.id) {
        throw error(400)
    }
    /**
     * @type {any}
     */
    const aggregation = await model.read(update.id);
    _checkExist(aggregation);
    _checkParmision(aggregation, user);

    const updateResult = await model.update(update.id, update.data);
    if (updateResult.acknowledged === false) {
        throw error(500);
    }
    /**
     * @type {import("../../../../../relay_types/api/basic.d.ts").UpdateResult}
     */
    const resp = {isUpdated:true}
   
    return json(resp);
}
/**
 * 
 * @param {AggregationType} aggregation
 * @param {string} user 
 */
function _checkParmision(aggregation, user) {


    
    if (aggregation.owner !== user) {
        throw error(400);

    }


}


