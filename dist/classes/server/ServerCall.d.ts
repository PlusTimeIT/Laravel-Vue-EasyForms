import { ServerResponse } from "./ServerResponse";
import { AxiosCalls } from "../../enums";
export declare class ServerCall {
    static mergeData(o1: object, o2: object): object;
    static request(type: AxiosCalls, endpoint: string, data?: any): Promise<ServerResponse>;
}
//# sourceMappingURL=ServerCall.d.ts.map