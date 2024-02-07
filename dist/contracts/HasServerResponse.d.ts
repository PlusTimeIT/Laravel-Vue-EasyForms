import type { HasAxiosReturn } from "./HasAxiosReturn";
import type { HttpStatusCode } from "axios";
/**
 *  Server Response interface for handling responses
 */
export interface HasServerResponse {
    status: HttpStatusCode | undefined;
    statusText: string;
    request: object;
    headers: object;
    data: HasAxiosReturn | null;
    config: object;
}
//# sourceMappingURL=HasServerResponse.d.ts.map