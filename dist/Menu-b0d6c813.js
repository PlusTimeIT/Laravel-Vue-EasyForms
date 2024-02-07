var s = Object.defineProperty;
var a = (n, o, t) => o in n ? s(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t;
var e = (n, o, t) => (a(n, typeof o != "symbol" ? o + "" : o, t), t);
import { L as i } from "./LocationTypes-c293bdaa.js";
import { S as c } from "./ScrollStrategyTypes-59a25e2a.js";
import { G as _ } from "./GotProps-d4ee0596.js";
class d extends _ {
  constructor(t) {
    super(t);
    e(this, "activator");
    e(this, "attach", !1);
    e(this, "close_delay", 250);
    e(this, "close_on_back", !0);
    e(this, "close_on_content_click", !1);
    e(this, "contained", !1);
    e(this, "content_class");
    e(this, "content_props");
    e(this, "disabled", !1);
    e(this, "eager", !1);
    e(this, "height");
    e(this, "id");
    e(this, "location", i.Bottom);
    e(this, "max_height");
    e(this, "max_width");
    e(this, "min_height");
    e(this, "min_width", 0);
    e(this, "no_click_animation", !1);
    e(this, "offset", 1);
    e(this, "open_delay", 1);
    e(this, "open_on_click", !0);
    e(this, "open_on_focus", !1);
    e(this, "open_on_hover", !1);
    e(this, "persistent", !1);
    e(this, "scrim", !1);
    e(this, "scroll_strategy", c.Reposition);
    e(this, "theme");
    e(this, "width");
    e(this, "z_index", 2e3);
    Object.assign(this, t);
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
  d as M
};
