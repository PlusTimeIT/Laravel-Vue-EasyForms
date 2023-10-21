var s = Object.defineProperty;
var a = (n, o, t) => o in n ? s(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t;
var e = (n, o, t) => (a(n, typeof o != "symbol" ? o + "" : o, t), t);
import { A as g, F as k } from "./FormContainer-4f2b893c.js";
import { B as b } from "./Button-d4fe527d.js";
import { G as i, i as _ } from "./Icon-67bf229a.js";
import { I as y } from "./Icon-67bf229a.js";
import { M as z } from "./Menu-4aa94277.js";
import { L as c } from "./ScrollStrategyTypes-5e52e633.js";
import "./AlertTriggers-367c8134.js";
import "./ButtonVariantTypes-50d88936.js";
import "./DensityTypes-eaa8882a.js";
class d extends i {
  constructor(t) {
    super(t);
    e(this, "activator");
    e(this, "attach", !1);
    e(this, "close_delay");
    e(this, "close_on_back", !1);
    e(this, "close_on_content_click", !1);
    e(this, "contained", !1);
    e(this, "content_class");
    e(this, "content_props");
    e(this, "disabled", !1);
    e(this, "eager", !0);
    e(this, "height");
    e(this, "location", c.Top);
    e(this, "max_height");
    e(this, "max_width");
    e(this, "min_height");
    e(this, "min_width", 0);
    e(this, "model_value", !1);
    e(this, "no_click_animation", !1);
    e(this, "offset", 10);
    e(this, "open_delay");
    e(this, "open_on_click", !1);
    e(this, "open_on_focus", !1);
    e(this, "open_on_hover", !0);
    e(this, "scrim", !1);
    e(this, "text");
    e(this, "theme");
    e(this, "transition", !1);
    e(this, "width");
    e(this, "z_index", 2e3);
    Object.assign(this, t), _(this.text) && (this.open_on_click = !1, this.open_on_focus = !1, this.open_on_hover = !1, this.disabled = !0);
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
  g as Alert,
  b as Button,
  k as FormContainer,
  y as Icon,
  z as Menu,
  d as Tooltip
};
