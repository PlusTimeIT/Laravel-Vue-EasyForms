import { AxiosCalls } from "../../enums";
import { AxiosOptions } from "../properties";
import { AxiosHeaders, AxiosResponse } from "axios";
/**
 * ServerCall for making API requests
 */
export declare class ServerCall {
    static mergeData(data: FormData, merge: object): object;
    static request(type: AxiosCalls, endpoint: string, data?: any, axiosOptions?: AxiosOptions): Promise<AxiosResponse>;
    static buildHeaders(axiosOptions: AxiosOptions): AxiosHeaders;
}
//# sourceMappingURL=ServerCall.d.ts.map