export type WebSite = {
    
    url:string,
}

export type ProtocolAddress = {
   
    name:string,
    address: string, 
}

export type Link = WebSite | ProtocolAddress | {
    linkType: 'protocolAddress' | 'website'
};

export type Audit = Link[];// same thing multyple link. ex websit, onchain 
export type Oracle = {
    name:string,
    website:WebSite?,
    protocol:ProtocolAddress,
    audit:Audit
}

export type Contract = {
    name:string?
    about:string?,
    website:WebSite?,
    protocol:ProtocolAddress,
    audit:Audit,
    oracles:Oracle[]?
    isSender:boolean?

}
export type AggregationHeader = {
    description: string?,
    website: WebSite?,
    protocol: string?,
    address: string,
    id:string | number | null,
}
export type Aggregation = AggregationHeader | {
       
    logger:Contract,
    audit:Audit,
    contracts:Contract[],
    origin:ProtocolAddress,

}