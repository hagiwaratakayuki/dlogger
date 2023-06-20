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
export type Aggregation = {

    title: string,
    description: string,
    website: WebSite,
    protocol: string?,
    id?: string | number,
    owner?: string
    logger: Contract,
    audit: Audit,
    contracts: Contract[],
    origin: ProtocolAddress,

}