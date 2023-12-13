import { i } from "./Store-dda3f8ae.js";
class a {
  /**
   * Capitalizes the first letter of each word in a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter of each word capitalized.
   */
  static capitalizeEach(e) {
    return e.split(" ").map((s) => a.capitalizeFirst(s)).join(" ");
  }
  /**
   * Capitalizes the first letter of a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter capitalized.
   */
  static capitalizeFirst(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  /**
   * Convert validation message placeholders in a string.
   *
   * @param name The attribute name associated with the validation message.
   * @param message The validation message containing placeholders.
   * @param params An array of objects containing key-value pairs to replace placeholders.
   * @returns A string with placeholders replaced and kebab case conversion applied.
   */
  static convertMessageHolders(e, s, r = []) {
    for (const t of r)
      s = s.replace(t.key, t.replace_with);
    return s.replace(":attribute", a.replaceUnderscoresAndHyphens(e));
  }
  /**
   * Generates a random string of the specified length using characters from the given character set.
   *
   * @param length The length of the random string to generate.
   * @param charSet The character set to use for generating the random string.
   *                Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
   * @returns A randomly generated string of the specified length.
   */
  static generate(e, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    const r = [];
    for (let t = 0; t < e; t++) {
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
  static replaceUnderscoresAndHyphens(e) {
    return e.replace(/[_-]/g, " ");
  }
  /**
   * Converts Snake case to Camel case.
   *
   * @param input The string to convert.
   * @returns Camel case conversion of the string.
   */
  static snakeToCamel(e) {
    return e.toLowerCase().replace(/[-_][a-z0-9]/g, (s) => s.slice(-1).toUpperCase());
  }
  /**
   * Convert Snake case to Kebab case.
   *
   * @param input The string to convert.
   * @returns Kebab case conversion of the string.
   */
  static snakeToKebab(e) {
    return e.replaceAll("_", "-");
  }
  /**
   * Convert Kebab to Snake case
   *
   * @param input The string to convert.
   * @returns Snake case conversion of the string.
   */
  static kebabToSnake(e) {
    return e.replaceAll("-", "_");
  }
}
class l {
  /**
   * Format the components prop names.
   * @param key
   * @returns string appropriate key for prop names
   */
  static formatKey(e) {
    return a.snakeToKebab(e);
  }
}
const c = (o) => l.formatKey(o);
class h {
  constructor(e) {
    Object.assign(this, e);
  }
  // this should be overwritten on parent class to return allowed props.
  // If nothing is supplied in this array, then no props are passed to components.
  allowedProps() {
    return [];
  }
  props() {
    const e = {}, s = this.allowedProps();
    for (const r of Object.keys(this)) {
      const t = r;
      !i(this[t]) && s.includes(r) && (t.toString().includes("icon") ? i(this[t].icon) ? e[c(r)] = this[t] : e[c(r)] = this[t].icon : r == "text_style" ? e.text = this[t] : e[c(r)] = this[t]);
    }
    return e;
  }
}
export {
  h as G,
  a as S
};
