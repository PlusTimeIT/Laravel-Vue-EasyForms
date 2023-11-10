var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { G as GotProps } from "./GotProps-440b6309.js";
import { i as isEmpty } from "./Types-dbac3a4a.js";
import { L as LocationTypes, S as ScrollStrategyTypes } from "./ScrollStrategyTypes-b9c8a739.js";
class Icon extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "class");
    __publicField(this, "color", "primary");
    __publicField(this, "end", false);
    __publicField(this, "icon", "");
    __publicField(this, "size");
    __publicField(this, "start", false);
    __publicField(this, "tooltip");
    __publicField(this, "tag", "i");
    if (!isEmpty(init == null ? void 0 : init.tooltip)) {
      this.tooltip = new Tooltip(init == null ? void 0 : init.tooltip);
      init == null ? true : delete init.tooltip;
    }
    Object.assign(this, init);
    if (isEmpty(this.tooltip)) {
      this.tooltip = new Tooltip({ disabled: true });
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
    __publicField(this, "id");
    __publicField(this, "height");
    __publicField(this, "location", LocationTypes.Top);
    __publicField(this, "max_height");
    __publicField(this, "max_width");
    __publicField(this, "min_height");
    __publicField(this, "min_width", 0);
    __publicField(this, "no_click_animation", false);
    __publicField(this, "offset", 10);
    __publicField(this, "open_delay");
    __publicField(this, "open_on_click", false);
    __publicField(this, "open_on_focus", false);
    __publicField(this, "open_on_hover", true);
    __publicField(this, "scrim", false);
    __publicField(this, "scroll_strategy", ScrollStrategyTypes.Close);
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
  Icon as I,
  Tooltip as T
};
