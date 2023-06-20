import { error } from "@sveltejs/kit";
/**
 * 
 * @param {{_id:any, id:undefined}} data 
 */
export function projectionTo(data) {
    data.id = data._id;
    delete data._id
    return data;

}
/**
 * 
 * @param {{_id:any} | null} aggregation 
 */
export    function _checkExist(aggregation) {
    if (!aggregation?._id) {
        throw error(404)
    }

}
