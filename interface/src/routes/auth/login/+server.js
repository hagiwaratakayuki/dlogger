import { connect } from "$lib/server/mongodb";

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    //const {id, password} = await request.json();
    connect();



    return new Response();
};
