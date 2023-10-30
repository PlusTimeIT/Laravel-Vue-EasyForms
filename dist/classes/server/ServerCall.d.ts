import { ServerResponse } from "./ServerResponse";
import { AxiosCalls } from "../../enums";
import { AxiosOptions } from "../properties";
import { AxiosHeaders } from "axios";
export declare class ServerCall {
    static mergeData(o1: object, o2: object): object;
    static request(type: AxiosCalls, endpoint: string, data?: any, axiosOptions?: AxiosOptions): Promise<ServerResponse>;
    static buildHeaders(axiosOptions: AxiosOptions): AxiosHeaders;
}
//# sourceMappingURL=ServerCall.d.ts.map