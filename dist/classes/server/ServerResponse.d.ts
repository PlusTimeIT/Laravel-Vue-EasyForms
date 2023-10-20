import { ServerResponse as ServerResponseAbstract } from "../../abstracts/ServerResponse";
import { HasAxiosReturn } from "../../contracts/HasAxiosReturn";
import { HttpStatusCode } from "axios";
export declare class ServerResponse implements ServerResponseAbstract {
    config: object;
    data: HasAxiosReturn | null;
    headers: object;
    request: object;
    status: HttpStatusCode | undefined;
    statusText: string;
    constructor(init?: Partial<ServerResponse>);
}
//# sourceMappingURL=ServerResponse.d.ts.map