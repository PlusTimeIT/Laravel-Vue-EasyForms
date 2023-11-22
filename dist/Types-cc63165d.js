var c = Object.defineProperty;
var l = (e, t, n) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => (l(e, typeof t != "symbol" ? t + "" : t, n), n);
import o from "axios";
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
const s = class s {
  constructor(t) {
    /**
     * Pass the axios instance to use for the form loader
     */
    i(this, "axios");
    /**
     * The prefix for making calls via API, this is append to the backend domain.
     * It should begin with a forward slash and end without a forward slash.
     * This should match laravel.
     * eg. /api/v1.0/
     */
    i(this, "axios_prefix", "");
    /**
     * Backend domain for making API calls.
     * It should end without a forward slash.
     * eg. https://domain.com
     */
    i(this, "backend_domain", "");
    /**
     * If CSRF checks are required then this should be the endpoint.
     * It should begin with a forward slash and end without a forward slash.
     * eg. /security/cookie
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
    Object.assign(this, t), s.instance = this;
  }
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation lets us subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance() {
    return s.instance || (s.instance = new s()), s.instance;
  }
  buildDomain(t = "") {
    return u(t) ? this.backend_domain.concat(this.axios_prefix) : this.backend_domain.concat(this.axios_prefix.concat(t));
  }
};
i(s, "instance");
let a = s;
const d = {
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
    uses_vue_router: !1,
    axios: o
  })
}, f = (e) => r.isArray(e), b = (e) => r.isObject(e), y = (e) => r.isFile(e), m = (e) => r.isString(e), x = (e) => r.isNumber(e), g = (e) => r.isNumeric(e), h = (e) => r.isNull(e), u = (e) => r.isEmpty(e);
export {
  a as P,
  f as a,
  x as b,
  m as c,
  h as d,
  y as e,
  g as f,
  b as g,
  u as i,
  d as s
};
