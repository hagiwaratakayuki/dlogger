/**
 * @type {import("./secret.d.ts").Load}
 */
export const load = async function(){
    return {
        url:'your db url here',
        options: {}, // mongodb options see, https://www.mongodb.com/docs/manual/reference/connection-string
        dbName:'db name if you like'
    
    }
    
}

    
