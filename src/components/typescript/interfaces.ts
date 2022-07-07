import { OptionType, EndpointType, DataItemAuthorAndImgType, DataItemSourceType, DataSourceItemType } from './type';

export interface IApiKey {
    readonly apiKey: string;
}

export interface IGetRespParam {
    readonly endpoint: EndpointType;
    options?: OptionType;
}

export interface IUrlOptions {
    [optionName: string]: string;
}

export interface IDataItem extends Partial<DataItemAuthorAndImgType> {
    source: DataItemSourceType;
    title: string;
    url: string;
    publishedAt: string;
    content: string;
    description: string;
}

export interface IData {
    status: string;
    totalResults: number;
    articles: IDataItem[];
}

export interface IDataSource {
    status: string;
    sources: Array<DataSourceItemType>;
}
