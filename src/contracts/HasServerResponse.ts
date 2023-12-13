import type { HasAxiosReturn } from "./HasAxiosReturn";
import type { HttpStatusCode } from "axios";

/**
 *  Server Response interface for handling responses
 */
export interface HasServerResponse {
  // HTTP Status code
  status: HttpStatusCode | undefined;
  // HTTP Status Text
  statusText: string;
  // Request Object
  request: object;
  // Headers Object
  headers: object;
  // Data Object
  data: HasAxiosReturn | null;
  // Config Object
  config: object;
}
