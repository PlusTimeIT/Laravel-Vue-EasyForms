import { ServerResponse } from "./ServerResponse";
import { AxiosCalls } from "#/enums/AxiosCalls";
export declare class ServerCall {
    static request(type: AxiosCalls, endpoint: string, data?: any): Promise<ServerResponse>;
    static mergeData(o1: object, o2: object): object;
}
//# sourceMappingURL=ServerCall.d.ts.map