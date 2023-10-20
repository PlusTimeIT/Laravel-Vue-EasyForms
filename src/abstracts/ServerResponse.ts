import { HasAxiosReturn } from "../contracts/HasAxiosReturn";
import { HasServerResponse } from "../contracts/HasServerResponse";
import { HttpStatusCode } from "axios";

/**
 *  Abstract class for handling responses
 */
export abstract class ServerResponse implements HasServerResponse {
  // Config Object
  config: object = {};
  // Data Object
  data: HasAxiosReturn | null = null;
  // Headers Object
  headers: object = {};
  // Request Object
  request: object = {};
  // HTTP Status code
  status: HttpStatusCode | undefined;
  // HTTP Status Text
  statusText = "";

  constructor(init?: Partial<ServerResponse>) {
    Object.assign(this, init);
  }
}
