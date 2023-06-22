

/**
 * @param {import('@sveltejs/kit').RequestEvent} event
 * @param {import('mongodb').ObjectId} userObj
 * */
export async function loginSet(event, userObj) {
    await event.locals.session.create()
    await event.locals.session.update({ user: userObj.toString() })
    event.cookies.set('login', '1', {
        httpOnly: false
    })
}