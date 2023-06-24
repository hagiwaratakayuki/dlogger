export type KeysMap<T> {
    [key in keyof T]: T[key] extends Array<any> ? any[] : T[key] extends string ?  string : Object
}