var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { L as LocationTypes } from "./LocationTypes-8f3d7f01.js";
import { S as ScrollStrategyTypes } from "./ScrollStrategyTypes-c3dd8b07.js";
import { G as GotProps } from "./GotProps-440b6309.js";
class Menu extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "activator");
    __publicField(this, "attach", false);
    __publicField(this, "close_delay", 250);
    __publicField(this, "close_on_back", true);
    __publicField(this, "close_on_content_click", false);
    __publicField(this, "contained", false);
    __publicField(this, "content_class");
    __publicField(this, "content_props");
    __publicField(this, "disabled", false);
    __publicField(this, "eager", false);
    __publicField(this, "height");
    __publicField(this, "location", LocationTypes.Bottom);
    __publicField(this, "max_height");
    __publicField(this, "max_width");
    __publicField(this, "min_height");
    __publicField(this, "min_width", 0);
    __publicField(this, "no_click_animation", false);
    __publicField(this, "open_delay", 1);
    __publicField(this, "open_on_click", true);
    __publicField(this, "open_on_focus", false);
    __publicField(this, "open_on_hover", false);
    __publicField(this, "persistent", false);
    __publicField(this, "scrim", false);
    __publicField(this, "scroll_strategy", ScrollStrategyTypes.Reposition);
    __publicField(this, "width");
    __publicField(this, "z_index", 2e3);
    Object.assign(this, init);
  }
  /**
   * Returns an array of all allowed props that are present on V-Menu
   * https://vuetifyjs.com/en/api/v-menu/
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
      "persistent",
      "scrim",
      "scroll_strategy",
      "theme",
      "transition",
      "width",
      "z_index"
    ];
  }
}
export {
  Menu as M
};
