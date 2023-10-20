import { HasAxiosReturn } from "../contracts/HasAxiosReturn";
import { HasServerResponse } from "../contracts/HasServerResponse";
import { HttpStatusCode } from "axios";
export declare abstract class ServerResponse implements HasServerResponse {
    config: object;
    data: HasAxiosReturn | null;
    headers: object;
    request: object;
    status: HttpStatusCode | undefined;
    statusText: string;
    constructor(init?: Partial<ServerResponse>);
}
//# sourceMappingURL=ServerResponse.d.ts.map