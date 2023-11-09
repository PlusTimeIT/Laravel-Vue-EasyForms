var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import axios from "axios";
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
  })
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
  PluginOptions as P,
  isArray as a,
  isNumber as b,
  isString as c,
  isNull as d,
  isFile as e,
  isNumeric as f,
  isObject as g,
  isEmpty as i,
  store as s
};
