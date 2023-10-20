import { ServerResponse as ServerResponseAbstract } from "#/abstracts/ServerResponse";
import { HasAxiosReturn } from "#/contracts/HasAxiosReturn";
import { HttpStatusCode } from "axios";
export declare class ServerResponse implements ServerResponseAbstract {
    status: HttpStatusCode | undefined;
    statusText: string;
    request: object;
    headers: object;
    data: HasAxiosReturn | null;
    config: object;
    constructor(init?: Partial<ServerResponse>);
}
//# sourceMappingURL=ServerResponse.d.ts.map