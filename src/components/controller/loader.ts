import type { IApiKey, IGetRespParam, IUrlOptions } from '../typescript/interfaces';
import type { AllDataType, EndpointType, OptionType } from '../typescript/type';
import { ErrorsCode } from '../typescript/enum';

class Loader {
    constructor(private baseLink: string, private options: IApiKey) {}

    getResp(
        { endpoint, options = {} }: IGetRespParam,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === ErrorsCode.Unauthorized || res.status === ErrorsCode.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: IUrlOptions, endpoint: string): string {
        const urlOptions: IUrlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        const keys = Object.keys(urlOptions);
        keys.forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: EndpointType,
        callback: (data: AllDataType) => void,
        options: OptionType = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler.bind(this))
            .then((res: Response) => res.json())
            .then((data: AllDataType) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
