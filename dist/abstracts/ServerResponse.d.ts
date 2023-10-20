import { HasAxiosReturn } from "#/contracts/HasAxiosReturn";
import { HasServerResponse } from "#/contracts/HasServerResponse";
import { HttpStatusCode } from "axios";
export declare abstract class ServerResponse implements HasServerResponse {
    status: HttpStatusCode | undefined;
    statusText: string;
    request: object;
    headers: object;
    data: HasAxiosReturn | null;
    config: object;
    constructor(init?: Partial<ServerResponse>);
}
//# sourceMappingURL=ServerResponse.d.ts.map