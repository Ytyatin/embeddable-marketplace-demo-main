export interface IConfig extends IShareUrls {
    name: string;
    chainId: string;
    coinDenom: string;
    collections: ICollection[];
    id: string;
    createdDate: string;
    modifiedDate: string;
    banner?: string;
}

export interface IBaseCollection extends IShareUrls {
    id: string;
    name: string;
}

export enum ICollectionType {
    AUCTION = 'embeddables-auction',
    MARKETPLACE = 'embeddables-marketplace',
    CROWDFUND = 'embeddables-crowdfund',
    EXCHANGE = 'embeddables-exchange',
    LOCKDROP = 'lockdrop-exchange',
}


export interface IAuctionCollection extends IBaseCollection {
    auction: string;
    cw721: string;
    featured?: string;
    type: ICollectionType.AUCTION;
}

export interface IMarketplaceCollection extends IBaseCollection {
    marketplace: string;
    cw721: string;
    featured?: string;
    type: ICollectionType.MARKETPLACE;
}

export interface ICrowdfundCollection extends IBaseCollection {
    crowdfund: string;
    cw721: string;
    featured?: string;
    type: ICollectionType.CROWDFUND;
}

export interface IExchangeCollection extends IBaseCollection {
    exchange: string;
    cw20: string;
    type: ICollectionType.EXCHANGE;
}
export interface ILockdropCollection extends IBaseCollection {
    exchange: string;
    cw20: string;
    type: ICollectionType.LOCKDROP;
}

export type ICollectionCw20 = IExchangeCollection | ILockdropCollection;
export type ICollectionCw721 = IAuctionCollection | IMarketplaceCollection | ICrowdfundCollection;
export type ICollection = ICollectionCw20 | ICollectionCw721;


export interface IShareUrls {
    twitter?: string;
}