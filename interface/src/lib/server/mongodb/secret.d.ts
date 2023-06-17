import {type  MongoClientOptions } from 'mongodb';

export type Setting = {
    url:string,
    options?: MongoClientOptions | undefined,
    dbName?:  string | undefined

}

export type Load = () => Promise<Setting> | Setting 