
import { Model } from "./basic";
import bcrypt from "bcrypt";
const saltRounds = 10;
/**
 * @typedef {import("src/relay_types/user").PlainUser} PlainUserType
 * @typedef {import("src/relay_types/user").HashedUser} HashedUserType
 * 
 * */
export class User extends Model {
    async createIndex() {
        /** 
        * @type {Partial<{[k in keyof HashedUserType]: number}>}       
        */
        const index= {screen_name: 1};
        await this.collection.createIndex(index)
    }
    /**
     * 
     * @param {PlainUserType} param0 
     */
    async create({screen_name, password}) {
        
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return super.create({screen_name, hash})
    }
    /**
     * 
     * @param {PlainUserType} param0
     * 
     */
    async getObjectId({screen_name, password}) {
        /**
         * @type {import("mongodb").WithId<HashedUserType>}
         */
        const user = await this.getByScreenName(screen_name);
        if (!user?.hash) {
            return false
        }
        if (await bcrypt.compare(password, user.hash) === false) {
            return false
        }
        return user._id;


    }



    /**
     * 
     * @param {string} screen_name
     * @returns {Promise<any>} 
     */
    getByScreenName (screen_name) {
        return this.collection.findOne({screen_name})

    }
    /**
     * 
     * @param {string} screen_name 
     */
    async isExist(screen_name) {
       /**
        * @type {HashedUserType}
        */ 
       const res = await this.getByScreenName( screen_name);
       return !!res?.screen_name && !!res?.hash;

    }
}
