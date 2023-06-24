/**
 * 
 * @param {{owner:any }} data
 * @param {any} owner; 
 */
export function checkParmision (data, owner) {
    return data.owner === owner;

}