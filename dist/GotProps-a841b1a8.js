import { i as c } from "./Store-dda3f8ae.js";
class a {
  /**
   * Capitalizes the first letter of each word in a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter of each word capitalized.
   */
  static capitalizeEach(t) {
    return t.split(" ").map((s) => a.capitalizeFirst(s)).join(" ");
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
  static convertMessageHolders(t, s, r = []) {
    for (const e of r)
      s = s.replace(e.key, e.replace_with);
    return s.replace(":attribute", a.replaceUnderscoresAndHyphens(t));
  }
  /**
   * Generates a random string of the specified length using characters from the given character set.
   *
   * @param length The length of the random string to generate.
   * @param charSet The character set to use for generating the random string.
   *                Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
   * @returns A randomly generated string of the specified length.
   */
  static generate(t, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    const r = [];
    for (let e = 0; e < t; e++) {
      const n = Math.floor(Math.random() * s.length);
      r.push(s[n]);
    }
    return r.join("");
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
    return t.toLowerCase().replace(/[-_][a-z0-9]/g, (s) => s.slice(-1).toUpperCase());
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
class l {
  /**
   * Format the components prop names.
   * @param key
   * @returns string appropriate key for prop names
   */
  static formatKey(t) {
    return a.snakeToKebab(t);
  }
}
const i = (o) => l.formatKey(o);
class h {
  constructor(t) {
    Object.assign(this, t);
  }
  // this should be overwritten on parent class to return allowed props.
  // If nothing is supplied in this array, then no props are passed to components.
  allowedProps() {
    return [];
  }
  props() {
    const t = {}, s = this.allowedProps();
    for (const r of Object.keys(this)) {
      const e = r;
      !c(this[e]) && s.includes(r) && (e.toString().includes("icon") ? c(this[e].icon) ? t[i(r)] = this[e] : t[i(r)] = this[e].icon : r == "text_style" ? t.text = this[e] : t[i(r)] = this[e]);
    }
    return t;
  }
}
export {
  h as G,
  a as S
};
