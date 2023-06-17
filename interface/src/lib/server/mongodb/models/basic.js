import { connect } from "./connection";
import { ObjectId } from "mongodb";

const initiaizedCollections = {};

/**
 * @typedef {string | ObjectId} Id
 */

export class Model {
    
    constructor(){
        this.collectionName = this.constructor.name;
        
       


    }
    async connect() {
        const { Db } = await connect();

        /**
         * @property { import("mongodb").Db } 
         */
        this.Db = Db;
        /**
         * @property {import("mongodb").Collection}
         */
        this.collection = Db.collection(this.collectionName);
        if (initiaizedCollections[this.collectionName]) {
            this.createIndex();
            initiaizedCollections[this.collectionName] = true;

        }
       
    }
    async createIndex() {
        

    }
    /**
     * 
     * @param {Id} id 
     */
    read(id) {
        const _id = this._regularizeId(id)
        const query = {_id}
        return this.collection.findOne(query);

        
    }
    /**
     * @param { Id } id
     */
    
    _regularizeId(id) {
        return typeof id === 'string' ? new ObjectId(id) : id; 
    }
     /**
     * 
     * @param {any} doc
     * @param {import("mongodb").InsertOneOptions} options 
     */
    create(doc, options) {
        return this.collection.insertOne(doc, options)

    }
    /**
     * 
     * @param {Id} id 
     * @param {any} document
     * @param  {import("mongodb").UpdateOptions} options
     */
    update(id, document, options) {
        const _id = this._regularizeId(id);
        const query = {_id};
        return this.collection.updateOne(query, {'$set':document}, options)

    }
    /**
     * 
     * @param {Id} id 
     */
    delete(id) {
        const _id = this._regularizeId(id);
        return this.collection.deleteOne(_id)

    }
    /**
     * 
     * @param {any} query 
     */
    query(query) {
        this.collection.find(query);     
    

    }


}