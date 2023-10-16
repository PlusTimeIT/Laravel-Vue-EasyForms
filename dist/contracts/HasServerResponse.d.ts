import { HasAxiosReturn } from "./HasAxiosReturn";
import { HttpStatusCode } from "axios";
export interface HasServerResponse {
    status: HttpStatusCode | undefined;
    statusText: string;
    request: object;
    headers: object;
    data: HasAxiosReturn | null;
    config: object;
}
//# sourceMappingURL=HasServerResponse.d.ts.map