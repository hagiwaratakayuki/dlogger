import { checkParmision } from '$lib/server/auth/checkParmission';
import { Aggregation } from '$lib/server/mongodb/models/aggregation';
import { _checkExist } from '$lib/server/mongodb/util';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const model = new Aggregation();
    await model.connect();
    
    /**
     * @type {import('src/relay_types/api/basic.d.ts').IdKey}
     */
    const key = 'id';
    const id = event.params[key]
    if (!id) {
        return redirect(304, '/')
    }
    const { user } = await event.locals.session.get()
    


    /**
     * @type {any}
     */
    const aggregation = await model.read(id);
    if (!aggregation?._id) {
         return redirect(304, '/')
    }
    _checkExist(aggregation);
    if (checkParmision(aggregation, user) === false) {
        return redirect (304, '/')
    }
    

    return aggregation
};