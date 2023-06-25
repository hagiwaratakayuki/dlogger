import { request} from 'graphql-request';
let URL = '';

/**
 * 
 * @param {string} query 
 * @returns 
 */
export async function call(query) {
    if (!URL) {
        const fileName = `./secret.${import.meta.env?.MODE || 'production'}.js`
        let secret = await import(fileName);
        URL = secret.URL;
    }

    return await request(URL, query);
}

