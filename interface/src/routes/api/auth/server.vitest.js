import { describe, it } from 'vitest';
import *  as assert from 'node:assert';
import * as signup from './signup/+server';
import * as signin from './signin/+server';
import { User } from '$lib/server/mongodb/models/user';





describe('Server test', () => {
    it('shoud work signup and sign in', async () => {
        const model = new User();
        await model.connect();
        model.collection.drop();

        let sessionData = {};
        /**
         * 
        * @typedef {import("src/relay_types/user").PlainUser} PlainUser
        * @type {PlainUser}
        */
        const mockUser = {
            screen_name: "testuser",
            password: "pasuwaaadoo!"
        }

        /**
         * @type {Partial<import('@sveltekit-statefull-session/core').SveltekitSession>}
         */
        const session = {
           exists: async function() {
            return false;
           },
           create: async function() {
             
             return true

           },
           update: async function(_data) {
                sessionData = _data;
                return true

           },
           get: function () {
                return null;
           } 
        };
        /**
         * @type {any}
         */
        const event = {
            locals: {
                session
            },
            request: {
                json: function () {
                    
                    return mockUser;
                }
            },
            url:{
                searchParams:{
                    get:function(){

                    }
                }

            },
            cookies: {
                set: function() {

                }
            }
        
        }
        
        
        const signupResponse = await signup.POST(event);
        /**
         * @type {import('src/relay_types/api/basic').CreateResult}
         */
        const signupBody = JSON.parse(await signupResponse.text());
         
        assert.ok(signupBody.isCreated);
        /**
         * @type {import('mongodb').WithId<import('src/relay_types/user').HashedUser>}
         */
        const hashed = await model.getByScreenName(mockUser.screen_name)
        assert.equal(hashed._id, sessionData.user); 
        
        sessionData = {};
       
        const signinResponse = await signin.PUT(event);
        
        const signinBody = JSON.parse(await signinResponse.text());

        assert.ok(signinBody);
     
        assert.equal(hashed._id, sessionData.user); 




        
        model.collection.drop();
    })
    

})
