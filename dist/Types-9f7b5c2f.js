var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import axios, { AxiosHeaders } from "axios";
import { C as ContentTypes, A as AxiosCalls } from "./ContentTypes-f35a51f5.js";
import { a as AxiosOptions, A as AxiosHeader } from "./AxiosOptions-15ae3169.js";
class DateHelper {
  /**
   * Get minutes between 2 Date objects
   * @param start Date the start date with time included.
   * @param end Date the end date with time included.
   * @returns number
   */
  static minutesBetween(start, end) {
    let diff = (end.getTime() - start.getTime()) / 1e3;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
}
class TypeHelper {
  /**
   * Checks if a variable is an Array
   * @param o
   * @returns boolean
   */
  static isArray(o) {
    return Array.isArray(o);
  }
  /**
   * Checks if Array is empty
   * @param o
   * @returns boolean
   */
  static isArrayEmpty(o) {
    return o.length === 0;
  }
  /**
   * Checks if a variable is of type Boolean
   * @param o
   * @returns boolean
   */
  static isBoolean(o) {
    return typeof o === "boolean";
  }
  /**
   * Checks variable type and if it is empty. All cases are checked:
   * Undefined, null, empty object, empty array, empty or blank string.
   * Throws errors on number, boolean and function types.
   * @param o
   * @returns boolean
   */
  // static isEmpty(o: any): boolean {
  //   // check if item is undefined first
  //   if (this.isUndefined(o)) {
  //     return true;
  //   } else if (this.isNull(o)) {
  //     return true;
  //   } else if (this.isArray(o)) {
  //     return this.isArrayEmpty(o);
  //   } else if (this.isObject(o)) {
  //     return this.isObjectEmpty(o);
  //   } else if (this.isString(o)) {
  //     return this.isStringEmpty(o);
  //   } else if (this.isNumber(o)) {
  //     // console.trace('Numbers can not be checked for emptiness - use isUndefined function instead. This cannot be trusted since we are only checking if the number is greater than 0')
  //     return o <= 0;
  //   } else if (this.isBoolean(o)) {
  //     // console.trace('Booleans can not be checked for emptiness - use isUndefined function instead.')
  //     return false;
  //   } else if (this.isFunction(o)) {
  //     // console.trace('Functions can not be checked for emptiness - use isUndefined function instead.')
  //     return false;
  //   }
  //   throw new Error("Unknown type detected on emptiness check - " + typeof o);
  // }
  static isEmpty(o) {
    if (o === void 0 || o === null) {
      return true;
    }
    if (Array.isArray(o)) {
      return o.length === 0;
    }
    if (typeof o === "object") {
      return Object.keys(o).length === 0 && o.constructor === Object;
    }
    if (typeof o === "string") {
      return !o.length;
    }
    if (typeof o === "number") {
      return o <= 0 || isNaN(o);
    }
    return false;
  }
  /**
   * Checks if a variable is type of File
   * @param o
   * @returns boolean
   */
  static isFile(o) {
    return "File" in window && o instanceof File ? true : false;
  }
  /**
   * Checks if a variable is of type Function
   * @param o
   * @returns boolean
   */
  static isFunction(o) {
    return typeof o === "function";
  }
  /**
   * Checks if a variable is Null
   * @param o
   * @returns boolean
   */
  static isNull(o) {
    return o === null;
  }
  /**
   * Checks if a variable is of type Number
   * @param o
   * @returns boolean
   */
  static isNumber(o) {
    return typeof o === "number" && !isNaN(o);
  }
  /**
   * Checks if a variable is of type Number
   * @param o
   * @returns boolean
   */
  static isNumeric(o) {
    if (TypeHelper.isNumber(o)) {
      return true;
    }
    return typeof o === "string" && !isNaN(+o);
  }
  /**
   * Checks if a variable is of type Object
   * @param o
   * @returns boolean
   */
  static isObject(o) {
    return typeof o === "object";
  }
  /**
   * Checks if Object is empty
   * @param o
   * @returns boolean
   */
  static isObjectEmpty(o) {
    return Object.keys(o).length === 0 && o.constructor === Object;
  }
  /**
   * Checks if a variable is of type String
   * @param o
   * @returns boolean
   */
  static isString(o) {
    return typeof o === "string";
  }
  /**
   * Checks if String is empty
   * @param o
   * @returns boolean
   */
  static isStringEmpty(o) {
    return !(o == null ? void 0 : o.length);
  }
  /**
   * Checks if a variable is Undefined
   * @param o
   * @returns boolean
   */
  static isUndefined(o) {
    return typeof o === "undefined";
  }
}
const minutesBetween = function(start, end) {
  return DateHelper.minutesBetween(start, end);
};
const _PluginOptions = class _PluginOptions {
  constructor(init) {
    /**
     * Pass the axios instance to use for the form loader
     */
    __publicField(this, "axios");
    /**
     * The prefix for making calls via API, this is append to the backend domain.
     * It should begin with a forward slash and end without a forward slash.
     * This should match laravel.
     * eg. /api/v1.0/
     */
    __publicField(this, "axios_prefix", "");
    /**
     * Backend domain for making API calls.
     * It should end without a forward slash.
     * eg. https://domain.com
     */
    __publicField(this, "backend_domain", "");
    /**
     * If CSRF checks are required then this should be the endpoint.
     * It should begin with a forward slash and end without a forward slash.
     * eg. /security/cookie
     */
    __publicField(this, "csrf_endpoint", "");
    /**
     * Optional label text to append placeholder attribute
     */
    __publicField(this, "optional_label_text", " ( * Optional )");
    /**
     * Optional placeholder text to append placeholder attribute
     */
    __publicField(this, "optional_placeholder_text", " ( * Optional )");
    /**
     * Required label text to append placeholder attribute
     */
    __publicField(this, "required_label_text", " ( * Required )");
    /**
     * Required placeholder text to append placeholder attribute
     */
    __publicField(this, "required_placeholder_text", " ( * Required )");
    /**
     * Display required tags only, either tags_on_placeholder or tags_on_labels
     * must be set to true for this to take effect.
     */
    __publicField(this, "required_tags_only", true);
    /**
     * Should the label text display required and optional tags
     */
    __publicField(this, "tags_on_labels", false);
    /**
     * Should the placeholder text display required and optional tags
     */
    __publicField(this, "tags_on_placeholder", true);
    /**
     * When initiated, if placeholder is present and empty,
     * and text is present and not empty, placeholder should = text
     */
    __publicField(this, "text_to_placeholder", true);
    /**
     * Does your frontend application use vue router.
     */
    __publicField(this, "uses_vue_router", false);
    Object.assign(this, init);
    _PluginOptions.instance = this;
  }
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation lets us subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance() {
    if (!_PluginOptions.instance) {
      _PluginOptions.instance = new _PluginOptions();
    }
    return _PluginOptions.instance;
  }
  buildDomain(url = "") {
    if (isEmpty(url)) {
      return this.backend_domain.concat(this.axios_prefix);
    }
    return this.backend_domain.concat(this.axios_prefix.concat(url));
  }
};
__publicField(_PluginOptions, "instance");
let PluginOptions = _PluginOptions;
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
    const call = await store.options.axios[type](endpoint, data, { headers: ServerCall.buildHeaders(axiosOptions) });
    return new ServerResponse(call);
  }
  static buildHeaders(axiosOptions) {
    const content_header = axiosOptions.headers.find(
      (header) => header.key == "Content-Type"
    );
    let content_type = ContentTypes.Application;
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
class Csrf {
  constructor(init) {
    // Number of attempts allowed for csrf before wait time is imposed.
    __publicField(this, "allowed_attempts", 5);
    // Number of attempts for csrf
    __publicField(this, "attempts", 0);
    // Last time Csrf was attempted.
    __publicField(this, "last_attempt", /* @__PURE__ */ new Date());
    // When a User was last updated
    __publicField(this, "loading", false);
    // csrf retry wait time after attempts in minutes
    __publicField(this, "retry_wait", 5);
    // csrf token is set
    __publicField(this, "token", false);
    // csrf endpoint
    __publicField(this, "endpoint", "");
    Object.assign(this, init);
  }
  // Adds token attempt
  attemptCheck() {
    if (this.attempts >= this.allowed_attempts) {
      const waited_time = minutesBetween(this.last_attempt, /* @__PURE__ */ new Date());
      if (waited_time <= this.retry_wait) {
        return false;
      }
      this.resetAttempts();
    }
    this.last_attempt = /* @__PURE__ */ new Date();
    return true;
  }
  // failed attempts on csrf token call
  failedAttempt() {
    this.loading = false;
    this.token = false;
    return this;
  }
  // Fetch new token
  async fetchNewToken() {
    this.loading = true;
    if (!this.attemptCheck()) {
      this.failedAttempt();
      return false;
    }
    this.tokenAttempt();
    let response;
    try {
      response = await ServerCall.request(AxiosCalls.Get, this.endpoint);
      if (response.status === 200 || response.status === 204) {
        this.successfulAttempt();
        this.resetAttempts();
        return true;
      }
    } catch (error) {
      this.failedAttempt();
      return false;
    }
    this.failedAttempt();
    return false;
  }
  // Is CSRF Token valid
  isValidCsrfToken() {
    return this.token;
  }
  // reset attempts on successful csrf token call
  resetAttempts() {
    this.attempts = 0;
    return this;
  }
  // successful attempts on csrf token call
  successfulAttempt() {
    this.loading = false;
    this.token = true;
    return this;
  }
  // Adds token attempt
  tokenAttempt() {
    this.attempts++;
    return this;
  }
}
const store = {
  options: new PluginOptions({
    axios_prefix: "",
    backend_domain: "",
    csrf_endpoint: "",
    optional_label_text: " ( * Optional )",
    optional_placeholder_text: " ( * Optional )",
    required_label_text: " ( * Required )",
    required_placeholder_text: " ( * Required )",
    required_tags_only: true,
    tags_on_labels: false,
    tags_on_placeholder: true,
    text_to_placeholder: true,
    uses_vue_router: false,
    axios
  }),
  csrf: new Csrf()
};
const isArray = (o) => TypeHelper.isArray(o);
const isObject = (o) => TypeHelper.isObject(o);
const isFile = (o) => TypeHelper.isFile(o);
const isString = (o) => TypeHelper.isString(o);
const isNumber = (o) => TypeHelper.isNumber(o);
const isNumeric = (o) => TypeHelper.isNumeric(o);
const isNull = (o) => TypeHelper.isNull(o);
const isEmpty = (o) => TypeHelper.isEmpty(o);
export {
  Csrf as C,
  PluginOptions as P,
  ServerCall as S,
  isArray as a,
  isNumber as b,
  isString as c,
  isNull as d,
  isFile as e,
  isNumeric as f,
  isObject as g,
  ServerResponse as h,
  isEmpty as i,
  store as s
};
