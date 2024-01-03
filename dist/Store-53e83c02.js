var p = Object.defineProperty;
var d = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var i = (e, t, r) => (d(e, typeof t != "symbol" ? t + "" : t, r), r);
import _ from "axios";
class o {
  /**
   * Capitalizes the first letter of each word in a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter of each word capitalized.
   */
  static capitalizeEach(t) {
    return t.split(" ").map((r) => o.capitalizeFirst(r)).join(" ");
  }
  /**
   * Capitalizes the first letter of a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter capitalized.
   */
  static capitalizeFirst(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  /**
   * Convert validation message placeholders in a string.
   *
   * @param name The attribute name associated with the validation message.
   * @param message The validation message containing placeholders.
   * @param params An array of objects containing key-value pairs to replace placeholders.
   * @returns A string with placeholders replaced and kebab case conversion applied.
   */
  static convertMessageHolders(t, r, c = []) {
    for (const n of c)
      r = r.replace(n.key, n.replace_with);
    return r.replace(":attribute", o.replaceUnderscoresAndHyphens(t));
  }
  /**
   * Generates a random string of the specified length using characters from the given character set.
   *
   * @param length The length of the random string to generate.
   * @param charSet The character set to use for generating the random string.
   *                Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
   * @returns A randomly generated string of the specified length.
   */
  static generate(t, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    const c = [];
    for (let n = 0; n < t; n++) {
      const u = Math.floor(Math.random() * r.length);
      c.push(r[u]);
    }
    return c.join("");
  }
  /**
   * Replaces underscores and hyphens with spaces in a string.
   *
   * @param input The input string containing underscores or hyphens.
   * @returns A new string with underscores and hyphens replaced by spaces.
   */
  static replaceUnderscoresAndHyphens(t) {
    return t.replace(/[_-]/g, " ");
  }
  /**
   * Converts Snake case to Camel case.
   *
   * @param input The string to convert.
   * @returns Camel case conversion of the string.
   */
  static snakeToCamel(t) {
    return t.toLowerCase().replace(/[-_][a-z0-9]/g, (r) => r.slice(-1).toUpperCase());
  }
  /**
   * Convert Snake case to Kebab case.
   *
   * @param input The string to convert.
   * @returns Kebab case conversion of the string.
   */
  static snakeToKebab(t) {
    return t.replaceAll("_", "-");
  }
  /**
   * Convert Kebab to Snake case
   *
   * @param input The string to convert.
   * @returns Snake case conversion of the string.
   */
  static kebabToSnake(t) {
    return t.replaceAll("-", "_");
  }
  /**
   * Convert Kebab to Pascal case
   *
   * @param input The string to convert.
   * @returns Snake case conversion of the string.
   */
  static kebabToPascal(t) {
    return t.split("-").map(this.capitalizeFirst).join("");
  }
}
class s {
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
    return s.isNumber(t) ? !0 : typeof t == "string" && !isNaN(+t);
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
const y = (e) => s.isArray(e), m = (e) => s.isObject(e), x = (e) => s.isFile(e), g = (e) => s.isString(e), j = (e) => s.isNumber(e), N = (e) => s.isNumeric(e), A = (e) => s.isNull(e), f = (e) => s.isEmpty(e), a = class a {
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
    this.axios = _.create({
      withCredentials: !0,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }), Object.assign(this, t), a.instance = this;
  }
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation lets us subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance(t) {
    return a.instance || (a.instance = new a(t)), a.instance;
  }
  buildDomain(t = "") {
    return f(t) ? this.backend_domain.concat(this.axios_prefix) : this.backend_domain.concat(this.axios_prefix.concat(t));
  }
};
i(a, "instance");
let l = a;
const k = {
  options: new l({
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
  l as P,
  o as S,
  y as a,
  j as b,
  g as c,
  A as d,
  x as e,
  N as f,
  m as g,
  f as i,
  k as s
};
