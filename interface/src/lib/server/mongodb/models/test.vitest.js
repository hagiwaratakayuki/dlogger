import { describe, it } from 'vitest';
import *  as assert from 'node:assert';
import { Model } from './basic';

describe('Model test', () => {
    it('shoud work basic flow ', async () => {
        /**
         * @typedef {Partial<{_id:import("mongodb").ObjectId, 'test':boolean}>} TestValue
         */

        const model = new Model();
        await model.connect();
        /**
         * @type {TestValue}
         */
        const testValue = { 'test': true };
        const result = await model.create(testValue);
        
        /**
         * @type {TestValue}
         */
        const response = await model.read(result.insertedId)

        assert.equal(response.test, testValue.test)
        assert.equal(response._id.toString(), testValue._id.toString());
        
        /**
         * @type {TestValue}
         */
        const update = {test:false}
    
       
        const updateResult =  await model.update(response._id.toString(), update)
        
        assert.ok(updateResult.acknowledged)
        /**
        * @type {TestValue}
        */
        const updated = await model.read(result.insertedId)
        assert.equal(updated.test, false)

        const deleteResult = await model.delete(response._id);
        assert.equal(deleteResult.acknowledged, true)
        console.log(await model.read(result.insertedId))
        await model.collection.drop();
    
        
        
    })
})