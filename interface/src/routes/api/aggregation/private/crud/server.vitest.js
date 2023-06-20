import { describe, it } from 'vitest';
import *  as assert from 'node:assert';
import * as server from './+server';
import { Aggregation } from '$lib/server/mongodb/models/aggregation';


describe('Server test', () => {
    it('shoud work crud flow ', async () => {
        const testSession = {user:'test'};
        /**
         * @type {any}
         */
        let testData  = {description:'test'};
        let id;

        
        /**
         * @type {any}
         */
        const event = {
            locals:{
                session:{
                    get:function(){
                        return testSession
                    }
                }
            },
            request: {
                json: function() {
                    return testData
                }
            },
            url:{
                searchParams:{
                    get:function() {
                        return id;
                    }
                }
            }


        }
        const entity = new Aggregation()
        await entity.connect();
        const createResult = await server.POST(event)
        assert.ok(createResult.ok)
        
        const createBody = JSON.parse(await createResult.text())
        
        assert.ok('id' in createBody);
        id = createBody.id;

       
        const firstGetResult = await server.GET(event);
        const firstGetResultBody = JSON.parse(await firstGetResult.text())
        
        assert.ok(firstGetResult.ok)
        assert.equal(firstGetResultBody.id, id)
        testData = {id, data:{description:"test2"}}
        const updateResult = await server.PUT(event);
        /**
         * @type {import('../../../../../relay_types/api/basic.d.ts').UpdateResult}
         */
        const updateResultData = JSON.parse(await updateResult.text());
        assert.ok(updateResultData.isUpdated);

        const secondGetResult = await server.GET(event);
        
        const secondGetResultBody = JSON.parse(await secondGetResult.text());
        assert.equal(secondGetResultBody.description, testData.data.description);

        const deleteResult = await server.DELETE(event);
        /**
         * @type {import("../../../../../relay_types/api/basic.d.ts").DeleteResult}
         */
        const deleteResultBody = JSON.parse(await deleteResult.text());        
        assert.ok(deleteResultBody.isDeleted);
        
        try {
            await server.GET(event)
            assert.ok(false, 'not deleted')
        } catch (error) {
            assert.equal(error.status, 404)
        }
        
    
        

        entity.collection.drop();



    })
})