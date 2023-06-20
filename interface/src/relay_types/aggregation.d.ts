export type WebSite = {
    linkType?: "website",
    url:string,
}

export type ProtocolAddress = {
    linkType?: "website",
    name:string,
    address: string, 
}

export type Link = WebSite | ProtocolAddress; 

export type Audit = Link[];// same thing multiple link. ex website, onchain 
export type Oracle = {
    name:string,
    website:WebSite?,
    protocol:ProtocolAddress,
    audit:Audit
}

export type ContractMinimum = {
    isSender: boolean 
}

export type Contract = ContractMinimum & {
    name: string
    about: string,
    website: WebSite,
    protocol: ProtocolAddress,
    audit: Audit,
    oracles?: Oracle[]
    

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