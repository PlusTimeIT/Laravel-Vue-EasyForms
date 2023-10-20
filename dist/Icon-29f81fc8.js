var p = Object.defineProperty;
var f = (e, t, s) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var a = (e, t, s) => (f(e, typeof t != "symbol" ? t + "" : t, s), s);
class c {
  /**
   * Generates a random string of the specified length using characters from the given character set.
   *
   * @param length The length of the random string to generate.
   * @param charSet The character set to use for generating the random string.
   *                Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
   * @returns A randomly generated string of the specified length.
   */
  static generate(t, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    const i = [];
    for (let r = 0; r < t; r++) {
      const u = Math.floor(Math.random() * s.length);
      i.push(s[u]);
    }
    return i.join("");
  }
  /**
   * Convert validation message placeholders in a string.
   *
   * @param name The attribute name associated with the validation message.
   * @param message The validation message containing placeholders.
   * @param params An array of objects containing key-value pairs to replace placeholders.
   * @returns A string with placeholders replaced and kebab case conversion applied.
   */
  static convertMessageHolders(t, s, i = []) {
    for (const r of i)
      s = s.replace(r.key, r.replace_with);
    return s.replace(":attribute", c.replaceUnderscoresAndHyphens(t));
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
   * Convert Snake case to Kebab case.
   *
   * @param input The string to convert.
   * @returns Kebab case conversion of the string.
   */
  static snakeToKebab(t) {
    return t.replaceAll("_", "-");
  }
  /**
   * Converts Snake case to Camel case.
   *
   * @param input The string to convert.
   * @returns Camel case conversion of the string.
   */
  static snakeToCamel(t) {
    return t.toLowerCase().replace(/[-_][a-z0-9]/g, (s) => s.slice(-1).toUpperCase());
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
   * Capitalizes the first letter of each word in a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter of each word capitalized.
   */
  static capitalizeEach(t) {
    return t.split(" ").map((s) => c.capitalizeFirst(s)).join(" ");
  }
}
class y {
  /**
   * Format the components prop names.
   * @param key
   * @returns string appropriate key for prop names
   */
  static formatKey(t) {
    return c.snakeToKebab(t);
  }
}
class n {
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
  static isEmpty(t) {
    if (this.isUndefined(t))
      return !0;
    if (this.isNull(t))
      return !0;
    if (this.isArray(t))
      return this.isArrayEmpty(t);
    if (this.isObject(t))
      return this.isObjectEmpty(t);
    if (this.isString(t))
      return this.isStringEmpty(t);
    if (this.isNumber(t))
      return t <= 0;
    if (this.isBoolean(t))
      return !1;
    if (this.isFunction(t))
      return !1;
    throw new Error("Unknown type detected on emptiness check - " + typeof t);
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
    return n.isNumber(t) ? !0 : typeof t == "string" && !isNaN(+t);
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
const d = (e) => n.isArray(e), b = (e) => n.isObject(e), g = (e) => n.isFile(e), N = (e) => n.isString(e), j = (e) => n.isNumber(e), A = (e) => n.isNumeric(e), O = (e) => n.isNull(e), l = (e) => n.isEmpty(e), o = (e) => y.formatKey(e);
class h {
  constructor(t) {
    Object.assign(this, t);
  }
  // this should be overwritten on parent class to return allowed props.
  // If nothing is supplied in this array, then no props are passed to components.
  allowedProps() {
    return [];
  }
  instanceOfA(t) {
    return "icon" in t;
  }
  props() {
    const t = {}, s = this.allowedProps();
    for (const i of Object.keys(this)) {
      const r = i;
      !l(this[r]) && s.includes(i) && (r.toString().includes("icon") ? l(this[r].icon) ? t[o(i)] = this[r] : t[o(i)] = this[r].icon : i == "text_style" ? t.text = this[r] : t[o(i)] = this[r]);
    }
    return t;
  }
}
class E extends h {
  constructor(s) {
    super(s);
    a(this, "class");
    a(this, "color", "primary");
    a(this, "icon", "");
    a(this, "size");
    a(this, "tooltip");
    Object.assign(this, s);
  }
  /**
   * Returns an array of all allowed props that are present on V-Icon
   * https://vuetifyjs.com/en/api/v-icon/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return ["class", "color", "end", "icon", "size", "start", "tag", "theme"];
  }
}
export {
  h as G,
  E as I,
  c as S,
  d as a,
  j as b,
  N as c,
  O as d,
  g as e,
  A as f,
  b as g,
  l as i
};
