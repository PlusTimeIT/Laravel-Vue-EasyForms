var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as ContentTypes } from "./ContentTypes-783ab8ea.js";
import { s as store, i as isEmpty } from "./Types-dbac3a4a.js";
import { A as AxiosOptions, a as AxiosHeader } from "./AxiosOptions-a3506c4f.js";
import { AxiosHeaders } from "axios";
class ServerResponse {
  constructor(init) {
    /**
     * HTTP config object
     */
    __publicField(this, "config", {});
    /**
     * Axios return data
     */
    __publicField(this, "data", null);
    /**
     * HTTP headers object
     */
    __publicField(this, "headers", {});
    /**
     * HTTP request object
     */
    __publicField(this, "request", {});
    /**
     * HTTP status code
     */
    __publicField(this, "status");
    /**
     * HTTP Status Text
     */
    __publicField(this, "statusText", "");
    Object.assign(this, init);
  }
}
class ServerCall {
  static mergeData(o1, o2) {
    return Object.assign(o1, o2);
  }
  static async request(type, endpoint, data = null, axiosOptions = new AxiosOptions()) {
    const call = await store.options.axios[type](endpoint, data, {
      headers: ServerCall.buildHeaders(axiosOptions)
    });
    return new ServerResponse(call);
  }
  static buildHeaders(axiosOptions) {
    const content_header = axiosOptions.headers.find(
      (header) => header.key == "Content-Type"
    );
    let content_type = ContentTypes.JSON;
    if (axiosOptions.multi_part) {
      content_type = ContentTypes.MultiPart;
    }
    if (isEmpty(content_header)) {
      axiosOptions.headers.push(new AxiosHeader({ key: "Content-Type", value: content_type }));
    } else {
      content_header.value = content_type;
    }
    const axiosHeaders = new AxiosHeaders();
    axiosOptions.headers.forEach((header) => axiosHeaders.set(header.key, header.value));
    return axiosHeaders;
  }
}
export {
  ServerCall as S,
  ServerResponse as a
};
