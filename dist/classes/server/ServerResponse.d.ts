import { ServerResponse as ServerResponseAbstract } from "../../abstracts/ServerResponse";
import { HasAxiosReturn } from "../../contracts/HasAxiosReturn";
import { HttpStatusCode } from "axios";
/**
 * Server Response Class for handling responses
 */
export declare class ServerResponse implements ServerResponseAbstract {
    /**
     * HTTP config object
     */
    config: object;
    /**
     * Axios return data
     */
    data: HasAxiosReturn | null;
    /**
     * HTTP headers object
     */
    headers: object;
    /**
     * HTTP request object
     */
    request: object;
    /**
     * HTTP status code
     */
    status: HttpStatusCode | undefined;
    /**
     * HTTP Status Text
     */
    statusText: string;
    constructor(init?: Partial<ServerResponse>);
}
//# sourceMappingURL=ServerResponse.d.ts.map