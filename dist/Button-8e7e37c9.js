var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a as ButtonTypes, B as ButtonVariantTypes } from "./ButtonVariantTypes-e4c42916.js";
import { D as DensityTypes } from "./ScrollStrategyTypes-b9c8a739.js";
import { I as Icon, T as Tooltip } from "./Tooltip-dd8eaf56.js";
import { G as GotProps } from "./GotProps-440b6309.js";
import { i as isEmpty } from "./Types-dbac3a4a.js";
class Button extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "active", false);
    __publicField(this, "append_icon");
    __publicField(this, "block", false);
    __publicField(this, "border", false);
    __publicField(this, "class", "");
    __publicField(this, "color", "primary");
    __publicField(this, "density", DensityTypes.Default);
    __publicField(this, "disabled", false);
    __publicField(this, "elevation", 0);
    __publicField(this, "exact", false);
    __publicField(this, "flat", false);
    __publicField(this, "height");
    __publicField(this, "href");
    __publicField(this, "icon");
    __publicField(this, "loading", false);
    __publicField(this, "max_height");
    __publicField(this, "max_width");
    __publicField(this, "min_height");
    __publicField(this, "min_width", 0);
    __publicField(this, "order", 0);
    __publicField(this, "position");
    __publicField(this, "prepend_icon");
    __publicField(this, "replace", false);
    __publicField(this, "rounded", false);
    __publicField(this, "selected_class");
    __publicField(this, "size", "default");
    __publicField(this, "stacked", false);
    __publicField(this, "symbol");
    __publicField(this, "tag", "button");
    __publicField(this, "text");
    __publicField(this, "theme");
    __publicField(this, "to");
    __publicField(this, "tooltip");
    __publicField(this, "type", ButtonTypes.Process);
    __publicField(this, "value");
    __publicField(this, "variant", ButtonVariantTypes.Elevated);
    __publicField(this, "width");
    if (!isEmpty(init == null ? void 0 : init.append_icon)) {
      this.append_icon = new Icon(init == null ? void 0 : init.append_icon);
      init == null ? true : delete init.append_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.prepend_icon)) {
      this.prepend_icon = new Icon(init == null ? void 0 : init.prepend_icon);
      init == null ? true : delete init.prepend_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.icon)) {
      this.icon = new Icon(init == null ? void 0 : init.icon);
      init == null ? true : delete init.icon;
    }
    if (!isEmpty(init == null ? void 0 : init.tooltip)) {
      this.tooltip = new Tooltip(init == null ? void 0 : init.tooltip);
      init == null ? true : delete init.tooltip;
    }
    Object.assign(this, init);
  }
  /**
   * Returns an array of all allowed props that are present on V-Btn
   * https://vuetifyjs.com/en/api/v-btn/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      "block",
      "border",
      "class",
      "color",
      "density",
      "disabled",
      "elevation",
      "exact",
      "flat",
      "height",
      "href",
      "icon",
      "loading",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "position",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "replace",
      "rounded",
      "selected_class",
      "size",
      "stacked",
      "symbol",
      "tag",
      "text",
      "theme",
      "to",
      "value",
      "variant",
      "width"
    ];
  }
}
export {
  Button as B
};
