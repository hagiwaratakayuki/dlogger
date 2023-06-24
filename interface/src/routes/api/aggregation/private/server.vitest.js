import { describe, it } from 'vitest';
import *  as assert from 'node:assert';
import * as server from './+server';
import { Aggregation } from '$lib/server/mongodb/models/aggregation';



describe('Server test', () => {
    it('shoud return index', async () => {
        const model = new Aggregation();
        await model.connect();
        const owner = 'testuser';
        const test1 = 'test1';
        const test2 = 'test2'; 
        let testSession = {user:owner};

        await model.create({owner, title:test1})
        await new Promise(function(res){
            setTimeout(res, 10);
        })
        await model.create({owner, title:test2});
        await new Promise(function (res) {
            setTimeout(res, 10);
        })
        

        await model.create({owner:'owner2', title: test2 });
        /**
         * @type {any}
         */
        const event = {
            locals: {
                session: {
                    get: function () {
                        return testSession
                    }
                }
            },
            request: {
                json: function () {
                    return {}
                }
            },
            url:{
                searchParams:{
                    get:function(){

                    }
                }

            }
        }
        
        
        const response = await server.GET(event);
        /**
         * @type {import('../../../../relay_types/api/aggregations').Index}
         */
        const body = JSON.parse(await response.text());
        assert.equal(body.aggregations.length, 2);
        assert.equal(body.aggregations[0].title, test2);
        assert.equal(body.aggregations[1].title, test1);
        
        model.collection.drop();
    })
    

})
