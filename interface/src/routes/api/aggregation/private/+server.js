import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { Aggregation} from '$lib/server/mongodb/models/aggregation'
import { projectionTo } from '../../../../lib/server/mongodb/util';


/**
* @typedef {import("src/relay_types/aggregation").Aggregation} AggregationType
*/

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    const start = event.url.searchParams.get('cursor') || ''
    const {user} = await event.locals.session.get()
    const model = new Aggregation();
    await model.connect();
    
    
    const query = {owner:user}
    if (start) {
        query._id = {'$gte':new ObjectId(start)}
    }
    /**
     * @type {Partial<{[P in keyof AggregationType]: number}>};
     */
    const projection = {
        title:1
    }


    const cursor = model.query(query, {
        projection,
        limit:11,
        sort:{'_id':-1}


    });
    const aggregations = (await cursor.toArray()).map(projectionTo)
    const next = aggregations.length > 10 ? aggregations.pop().id : ''
   
   
   
    return json({aggregations, next});
};
