import { IData, IDataSource } from './interfaces';

export type OptionType = {
    sources?: string;
};

export type AllDataType = IData | IDataSource;

export type EndpointType = 'sources' | 'everything';

export type DataItemSourceType = Record<'id' | 'name', 'string | null'>;

export type DataItemAuthorAndImgType = Record<'urlToImage' | 'author', 'string | null'>;

export type DataSourceItemType = Record<
    'id' | 'name' | 'category' | 'language' | 'country' | 'description' | 'url',
    'string'
>;
