import { ServerResponse } from "./ServerResponse";
import { AxiosCalls } from "#/enums";
import axios from "axios";

/**
 * ServerCall for making API requests
 */
export class ServerCall {
  static async request(type: AxiosCalls, endpoint: string, data: any = null): Promise<ServerResponse> {
    const call = await axios[type](endpoint, data);
    return new ServerResponse(call);
  }

  static mergeData(o1: object, o2: object): object {
    return Object.assign(o1, o2);
  }
}
