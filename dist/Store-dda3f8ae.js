var c = Object.defineProperty;
var o = (e, t, n) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => (o(e, typeof t != "symbol" ? t + "" : t, n), n);
import l from "axios";
class r {
  /**
   * Checks if a variable is an Array
   * @param o
   * @returns boolean
   */
  static isArray(t) {
    return Array.isArray(t);
  }
  /**
   * Checks if Array is empty
   * @param o
   * @returns boolean
   */
  static isArrayEmpty(t) {
    return t.length === 0;
  }
  /**
   * Checks if a variable is of type Boolean
   * @param o
   * @returns boolean
   */
  static isBoolean(t) {
    return typeof t == "boolean";
  }
  static isEmpty(t) {
    return t == null ? !0 : Array.isArray(t) ? t.length === 0 : typeof t == "object" ? Object.keys(t).length === 0 && t.constructor === Object : typeof t == "string" ? !t.length : typeof t == "number" ? t <= 0 || isNaN(t) : !1;
  }
  /**
   * Checks if a variable is type of File
   * @param o
   * @returns boolean
   */
  static isFile(t) {
    return "File" in window && t instanceof File;
  }
  /**
   * Checks if a variable is of type Function
   * @param o
   * @returns boolean
   */
  static isFunction(t) {
    return typeof t == "function";
  }
  /**
   * Checks if a variable is Null
   * @param o
   * @returns boolean
   */
  static isNull(t) {
    return t === null;
  }
  /**
   * Checks if a variable is of type Number
   * @param o
   * @returns boolean
   */
  static isNumber(t) {
    return typeof t == "number" && !isNaN(t);
  }
  /**
   * Checks if a variable is of type Number
   * @param o
   * @returns boolean
   */
  static isNumeric(t) {
    return r.isNumber(t) ? !0 : typeof t == "string" && !isNaN(+t);
  }
  /**
   * Checks if a variable is of type Object
   * @param o
   * @returns boolean
   */
  static isObject(t) {
    return typeof t == "object";
  }
  /**
   * Checks if Object is empty
   * @param o
   * @returns boolean
   */
  static isObjectEmpty(t) {
    return Object.keys(t).length === 0 && t.constructor === Object;
  }
  /**
   * Checks if a variable is of type String
   * @param o
   * @returns boolean
   */
  static isString(t) {
    return typeof t == "string";
  }
  /**
   * Checks if String is empty
   * @param o
   * @returns boolean
   */
  static isStringEmpty(t) {
    return !(t != null && t.length);
  }
  /**
   * Checks if a variable is Undefined
   * @param o
   * @returns boolean
   */
  static isUndefined(t) {
    return typeof t > "u";
  }
}
const _ = (e) => r.isArray(e), f = (e) => r.isObject(e), b = (e) => r.isFile(e), y = (e) => r.isString(e), h = (e) => r.isNumber(e), m = (e) => r.isNumeric(e), x = (e) => r.isNull(e), u = (e) => r.isEmpty(e), s = class s {
  constructor(t) {
    /**
     * Pass the axios instance to use for the form loader
     */
    i(this, "axios");
    /**
     * The prefix for making calls via API, this is append to the backend domain.
     * It should begin with a forward slash and end without a forward slash.
     * This should match laravel.
     * e.g. /api/v1.0/
     */
    i(this, "axios_prefix", "");
    /**
     * Backend domain for making API calls.
     * It should end without a forward slash.
     * e.g. https://domain.com
     */
    i(this, "backend_domain", "");
    /**
     * If CSRF checks are required then this should be the endpoint.
     * It should begin with a forward slash and end without a forward slash.
     * e.g. /security/cookie
     */
    i(this, "csrf_endpoint", "");
    /**
     * Optional label text to append placeholder attribute
     */
    i(this, "optional_label_text", " ( * Optional )");
    /**
     * Optional placeholder text to append placeholder attribute
     */
    i(this, "optional_placeholder_text", " ( * Optional )");
    /**
     * Required label text to append placeholder attribute
     */
    i(this, "required_label_text", " ( * Required )");
    /**
     * Required placeholder text to append placeholder attribute
     */
    i(this, "required_placeholder_text", " ( * Required )");
    /**
     * Display required tags only, either tags_on_placeholder or tags_on_labels
     * must be set to true for this to take effect.
     */
    i(this, "required_tags_only", !0);
    /**
     * Should the label text display required and optional tags
     */
    i(this, "tags_on_labels", !1);
    /**
     * Should the placeholder text display required and optional tags
     */
    i(this, "tags_on_placeholder", !0);
    /**
     * When initiated, if placeholder is present and empty,
     * and text is present and not empty, placeholder should = text
     */
    i(this, "text_to_placeholder", !0);
    /**
     * Does your frontend application use vue router.
     */
    i(this, "uses_vue_router", !1);
    this.axios = l.create({
      withCredentials: !0,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }), Object.assign(this, t), s.instance = this;
  }
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation lets us subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance(t) {
    return s.instance || (s.instance = new s(t)), s.instance;
  }
  buildDomain(t = "") {
    return u(t) ? this.backend_domain.concat(this.axios_prefix) : this.backend_domain.concat(this.axios_prefix.concat(t));
  }
};
i(s, "instance");
let a = s;
const g = {
  options: new a({
    axios_prefix: "",
    backend_domain: "",
    csrf_endpoint: "",
    optional_label_text: " ( * Optional )",
    optional_placeholder_text: " ( * Optional )",
    required_label_text: " ( * Required )",
    required_placeholder_text: " ( * Required )",
    required_tags_only: !0,
    tags_on_labels: !1,
    tags_on_placeholder: !0,
    text_to_placeholder: !0,
    uses_vue_router: !1
  })
};
export {
  a as P,
  _ as a,
  h as b,
  y as c,
  x as d,
  b as e,
  m as f,
  f as g,
  u as i,
  g as s
};