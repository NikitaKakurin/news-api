import { IData, IDataSource } from './interfaces';

export type OptionType = {
    sources?: string;
};

export type AllDataType = IData | IDataSource;

export type EndpointType = 'sources' | 'everything';
