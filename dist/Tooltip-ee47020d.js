var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { i as isEmpty } from "./Types-9f7b5c2f.js";
import { L as LocationTypes } from "./LocationTypes-8f3d7f01.js";
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
class Icon extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "class");
    __publicField(this, "color", "primary");
    __publicField(this, "icon", "");
    __publicField(this, "size");
    __publicField(this, "tooltip");
    if (!isEmpty(init == null ? void 0 : init.tooltip)) {
      this.tooltip = new Tooltip(init == null ? void 0 : init.tooltip);
      init == null ? true : delete init.tooltip;
    }
    Object.assign(this, init);
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
class Tooltip extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "activator");
    __publicField(this, "attach", false);
    __publicField(this, "close_delay");
    __publicField(this, "close_on_back", false);
    __publicField(this, "close_on_content_click", false);
    __publicField(this, "contained", false);
    __publicField(this, "content_class");
    __publicField(this, "content_props");
    __publicField(this, "disabled", false);
    __publicField(this, "eager", true);
    __publicField(this, "height");
    __publicField(this, "location", LocationTypes.Top);
    __publicField(this, "max_height");
    __publicField(this, "max_width");
    __publicField(this, "min_height");
    __publicField(this, "min_width", 0);
    __publicField(this, "model_value", false);
    __publicField(this, "no_click_animation", false);
    __publicField(this, "offset", 10);
    __publicField(this, "open_delay");
    __publicField(this, "open_on_click", false);
    __publicField(this, "open_on_focus", false);
    __publicField(this, "open_on_hover", true);
    __publicField(this, "scrim", false);
    __publicField(this, "text");
    __publicField(this, "theme");
    __publicField(this, "transition", false);
    __publicField(this, "width");
    __publicField(this, "z_index", 2e3);
    Object.assign(this, init);
    if (isEmpty(this.text)) {
      this.open_on_click = false;
      this.open_on_focus = false;
      this.open_on_hover = false;
      this.disabled = true;
    }
  }
  /**
   * Returns an array of all allowed props that are present on V-Tooltip
   * https://vuetifyjs.com/en/api/v-tooltip/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // 'activator',
      "attach",
      "close_delay",
      "close_on_back",
      "close_on_content_click",
      "contained",
      "content_class",
      "content_props",
      "disabled",
      "eager",
      "height",
      "id",
      "location",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "model_value",
      "no_click_animation",
      "offset",
      "open_delay",
      "open_on_click",
      "open_on_focus",
      "open_on_hover",
      "scrim",
      "text",
      "theme",
      "transition",
      "width",
      "z_index"
    ];
  }
}
export {
  GotProps as G,
  Icon as I,
  StringHelper as S,
  Tooltip as T
};
