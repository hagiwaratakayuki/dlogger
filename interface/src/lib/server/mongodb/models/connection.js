
import { MongoClient } from "mongodb";



const DEFAULT_DB = 'd_logger';
/**@type {string} */
let dbName;
/**
 * @type {MongoClient}
 */
let client;
/**
 * 
 * @returns {Promise<{Db:import('mongodb').Db, client:MongoClient}>}
 */
export async function connect() {
    if(!client) {
        
        const loaderPath = `../secret.${import.meta.env?.MODE || 'production'}.js`;
        /**
         * @type {{load:import('../secret').Load}}
         */
        let {load} = await import(loaderPath);
                
        const setting = await load();
    
        client = new MongoClient(setting.url, setting.options);
        await client.connect();
        dbName = setting.dbName || DEFAULT_DB;       


    }
    return {Db:client.db(dbName), client};
    


        

}