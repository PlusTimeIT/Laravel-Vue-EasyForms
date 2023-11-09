import { ServerResponse } from "./ServerResponse";
import { AxiosCalls, ContentTypes } from "../../enums";
import { isEmpty, store } from "../../composables/utils";
import { AxiosHeader, AxiosOptions } from "../properties";
import { AxiosHeaders } from "axios";

/**
 * ServerCall for making API requests
 */
export class ServerCall {
  static mergeData(o1: object, o2: object): object {
    return Object.assign(o1, o2);
  }

  static async request(
    type: AxiosCalls,
    endpoint: string,
    data: any = null,
    axiosOptions: AxiosOptions = new AxiosOptions(),
  ): Promise<ServerResponse> {
    const call = await store.options.axios[type](endpoint, data, {
      headers: ServerCall.buildHeaders(axiosOptions),
    });
    return new ServerResponse(call);
  }

  static buildHeaders(axiosOptions: AxiosOptions): AxiosHeaders {
    const content_header: AxiosHeader | undefined = axiosOptions.headers.find(
      (header: AxiosHeader) => header.key == "Content-Type",
    );
    let content_type: ContentTypes = ContentTypes.JSON;
    if (axiosOptions.multi_part) {
      content_type = ContentTypes.MultiPart;
    }
    if (isEmpty(content_header)) {
      axiosOptions.headers.push(new AxiosHeader({ key: "Content-Type", value: content_type }));
    } else {
      content_header!.value = content_type;
    }
    const axiosHeaders: AxiosHeaders = new AxiosHeaders();
    axiosOptions.headers.forEach((header) => axiosHeaders.set(header.key, header.value));
    return axiosHeaders;
  }
}
