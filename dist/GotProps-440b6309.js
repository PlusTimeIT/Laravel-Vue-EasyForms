import { i as isEmpty } from "./Types-dbac3a4a.js";
class StringHelper {
  /**
   * Capitalizes the first letter of each word in a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter of each word capitalized.
   */
  static capitalizeEach(input) {
    return input.split(" ").map((word) => StringHelper.capitalizeFirst(word)).join(" ");
  }
  /**
   * Capitalizes the first letter of a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter capitalized.
   */
  static capitalizeFirst(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  /**
   * Convert validation message placeholders in a string.
   *
   * @param name The attribute name associated with the validation message.
   * @param message The validation message containing placeholders.
   * @param params An array of objects containing key-value pairs to replace placeholders.
   * @returns A string with placeholders replaced and kebab case conversion applied.
   */
  static convertMessageHolders(name, message, params = []) {
    for (const param of params) {
      message = message.replace(param.key, param.replace_with);
    }
    return message.replace(":attribute", StringHelper.replaceUnderscoresAndHyphens(name));
  }
  /**
   * Generates a random string of the specified length using characters from the given character set.
   *
   * @param length The length of the random string to generate.
   * @param charSet The character set to use for generating the random string.
   *                Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
   * @returns A randomly generated string of the specified length.
   */
  static generate(length, charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    const randomChars = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      randomChars.push(charSet[randomIndex]);
    }
    return randomChars.join("");
  }
  /**
   * Replaces underscores and hyphens with spaces in a string.
   *
   * @param input The input string containing underscores or hyphens.
   * @returns A new string with underscores and hyphens replaced by spaces.
   */
  static replaceUnderscoresAndHyphens(input) {
    return input.replace(/[_-]/g, " ");
  }
  /**
   * Converts Snake case to Camel case.
   *
   * @param input The string to convert.
   * @returns Camel case conversion of the string.
   */
  static snakeToCamel(input) {
    return input.toLowerCase().replace(/[-_][a-z0-9]/g, (group) => group.slice(-1).toUpperCase());
  }
  /**
   * Convert Snake case to Kebab case.
   *
   * @param input The string to convert.
   * @returns Kebab case conversion of the string.
   */
  static snakeToKebab(input) {
    return input.replaceAll("_", "-");
  }
}
class PropHelper {
  /**
   * Format the components prop names.
   * @param key
   * @returns string appropriate key for prop names
   */
  static formatKey(key) {
    return StringHelper.snakeToKebab(key);
  }
}
const formatKey = (o) => PropHelper.formatKey(o);
class GotProps {
  constructor(init) {
    Object.assign(this, init);
  }
  // this should be overwritten on parent class to return allowed props.
  // If nothing is supplied in this array, then no props are passed to components.
  allowedProps() {
    return [];
  }
  props() {
    const result = {};
    const accepted_props = this.allowedProps();
    for (const key of Object.keys(this)) {
      const asKey = key;
      if (!isEmpty(this[asKey]) && accepted_props.includes(key)) {
        if (asKey.toString().includes("icon")) {
          if (!isEmpty(this[asKey].icon)) {
            result[formatKey(key)] = this[asKey].icon;
          } else {
            result[formatKey(key)] = this[asKey];
          }
        } else if (key == "text_style") {
          result["text"] = this[asKey];
        } else {
          result[formatKey(key)] = this[asKey];
        }
      }
    }
    return result;
  }
}
export {
  GotProps as G,
  StringHelper as S
};
