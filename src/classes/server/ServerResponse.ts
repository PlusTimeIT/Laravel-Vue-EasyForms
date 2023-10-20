import { ServerResponse as ServerResponseAbstract } from "../../abstracts/ServerResponse";
import { HasAxiosReturn } from "../../contracts/HasAxiosReturn";
import { HttpStatusCode } from "axios";

/**
 * Server Response Class for handling responses
 */
export class ServerResponse implements ServerResponseAbstract {
  /**
   * HTTP config object
   */
  config: object = {};
  /**
   * Axios return data
   */
  data: HasAxiosReturn | null = null;
  /**
   * HTTP headers object
   */
  headers: object = {};
  /**
   * HTTP request object
   */
  request: object = {};
  /**
   * HTTP status code
   */
  status: HttpStatusCode | undefined;
  /**
   * HTTP Status Text
   */
  statusText = "";

  constructor(init?: Partial<ServerResponse>) {
    Object.assign(this, init);
  }
}
