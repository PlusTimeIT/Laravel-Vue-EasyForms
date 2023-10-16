import { ServerResponse as ServerResponseAbstract } from "#/abstracts/ServerResponse";
import { HasAxiosReturn } from "#/contracts/HasAxiosReturn";
import { HttpStatusCode } from "axios";

/**
 * Server Response Class for handling responses
 */
export class ServerResponse implements ServerResponseAbstract {
  /**
   * HTTP status code
   */
  status: HttpStatusCode | undefined;
  /**
   * HTTP Status Text
   */
  statusText = "";
  /**
   * HTTP request object
   */
  request: object = {};
  /**
   * HTTP headers object
   */
  headers: object = {};
  /**
   * Axios return data
   */
  data: HasAxiosReturn | null = null;
  /**
   * HTTP config object
   */
  config: object = {};

  constructor(init?: Partial<ServerResponse>) {
    Object.assign(this, init);
  }
}
