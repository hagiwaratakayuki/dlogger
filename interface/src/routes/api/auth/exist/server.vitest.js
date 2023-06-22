import { describe, it } from 'vitest';
import *  as assert from 'node:assert';
import * as exist from './+server';

import { User } from '$lib/server/mongodb/models/user';





describe('Server test', () => {
    it('shoud work exist route', async () => {
        const model = new User();
        await model.connect();
        model.collection.drop();
        const testUser = 'testUser';
       
        await model.create({screen_name: testUser, password: "passs word"});

        
        
        let mockUser =  testUser;
          
        

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
           update: async function() {
                
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
        const resp = await exist.GET(event);
        const body = JSON.parse(await resp.text())
        assert.ok(body);
        mockUser = 'test2';
        const ngResp = await exist.GET(event);
        const ngBody = JSON.parse(await ngResp.text())
        assert.equal(false, ngBody);

        
        
    })
    

})
