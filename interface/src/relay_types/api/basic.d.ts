export type UpdateResult = {
    isUpdated: true
};

export type DeleteResult = {
    isDeleted: true
}

export type CreateResult = {
    isCreated: true
}

export type IdRequest = {
    id:'string',

};

export type IdKey = keyof IdRequest;