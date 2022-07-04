import { OptionType, EndpointType } from './type';

export interface IApiKey {
    readonly apiKey: string;
}

export interface IGetRespParam {
    readonly endpoint: EndpointType;
    options?: OptionType;
}

export interface IUrlOptions {
    [propName: string]: string;
}

interface IDataItemSource {
    id: string | null;
    name: string | null;
}

interface IDataItemAuthorAndImg {
    urlToImage: string | null;
    author: string | null;
}
export interface IDataItem extends Partial<IDataItemAuthorAndImg> {
    source: IDataItemSource;
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
    sources: Array<IDataSourceItem>;
}
export interface IDataSourceItem extends Pick<IDataItem, 'description' | 'url'> {
    id: string;
    name: string;
    category: string;
    language: string;
    country: string;
}
