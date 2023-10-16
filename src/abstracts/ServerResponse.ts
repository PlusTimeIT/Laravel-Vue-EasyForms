import { HasAxiosReturn } from "#/contracts/HasAxiosReturn";
import { HasServerResponse } from "#/contracts/HasServerResponse";
import { HttpStatusCode } from "axios";

/**
 *  Abstract class for handling responses
 */
export abstract class ServerResponse implements HasServerResponse {
  // HTTP Status code
  status: HttpStatusCode | undefined;
  // HTTP Status Text
  statusText = "";
  // Request Object
  request: object = {};
  // Headers Object
  headers: object = {};
  // Data Object
  data: HasAxiosReturn | null = null;
  // Config Object
  config: object = {};

  constructor(init?: Partial<ServerResponse>) {
    Object.assign(this, init);
  }
}
