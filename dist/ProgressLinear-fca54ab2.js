var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { G as GotProps } from "./GotProps-440b6309.js";
import { i as isEmpty } from "./Types-dbac3a4a.js";
class ProgressCircular extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "class");
    __publicField(this, "bg_color", "white");
    __publicField(this, "color");
    __publicField(this, "indeterminate", false);
    __publicField(this, "rotate", 0);
    __publicField(this, "size", "default");
    __publicField(this, "tag", "div");
    __publicField(this, "theme");
    __publicField(this, "width");
    Object.assign(this, init);
    if (isEmpty(this.class)) {
      this.class = "mx-auto my-auto text-center pa-10";
    }
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
    return ["bg_color", "color", "indeterminate", "rotate", "size", "tag", "theme", "width"];
  }
}
class ProgressLinear extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "class");
    __publicField(this, "absolute", false);
    __publicField(this, "active", false);
    __publicField(this, "bg_color", "primary");
    __publicField(this, "bg_opacity");
    __publicField(this, "color");
    __publicField(this, "height");
    __publicField(this, "indeterminate", false);
    __publicField(this, "location");
    __publicField(this, "reverse", false);
    __publicField(this, "rounded", false);
    __publicField(this, "rounded_bar", false);
    __publicField(this, "stream", false);
    __publicField(this, "striped", false);
    __publicField(this, "tag", "div");
    __publicField(this, "theme");
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
    return [
      "absolute",
      "active",
      "bg_color",
      "color",
      "height",
      "indeterminate",
      "location",
      "reverse",
      "rounded",
      "rounded_bar",
      "stream",
      "striped",
      "tag",
      "theme"
    ];
  }
}
export {
  ProgressCircular as P,
  ProgressLinear as a
};
