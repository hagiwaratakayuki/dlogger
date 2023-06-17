import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    const id = event.url.searchParams.get('id');
    if (!id) {
        throw error(400)
    }
    const {user} = await event.locals.session.get()
   
    //db load;
    //
    return new Response();
};

export async function DELETE() {

}

export async function POST() {

}

export async function PUT() {

}