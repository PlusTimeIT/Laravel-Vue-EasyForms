var s = Object.defineProperty;
var a = (n, e, t) => e in n ? s(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var o = (n, e, t) => (a(n, typeof e != "symbol" ? e + "" : e, t), t);
import { A as k } from "./Alert-ffeac445.js";
import { B as b } from "./Button-2d9f4cd7.js";
import { F as y } from "./FormContainer-3e31507e.js";
import { G as i, i as _ } from "./Icon-67bf229a.js";
import { I as z } from "./Icon-67bf229a.js";
import { M as B } from "./Menu-4aa94277.js";
import { L as c } from "./ScrollStrategyTypes-5e52e633.js";
import "./AlertTriggers-367c8134.js";
import "./ButtonVariantTypes-6c8b0d38.js";
import "./DensityTypes-eaa8882a.js";
import "./ButtonTypes-4a9e277c.js";
class x extends i {
  constructor(t) {
    super(t);
    o(this, "activator");
    o(this, "attach", !1);
    o(this, "close_delay");
    o(this, "close_on_back", !1);
    o(this, "close_on_content_click", !1);
    o(this, "contained", !1);
    o(this, "content_class");
    o(this, "content_props");
    o(this, "disabled", !1);
    o(this, "eager", !0);
    o(this, "height");
    o(this, "location", c.Top);
    o(this, "max_height");
    o(this, "max_width");
    o(this, "min_height");
    o(this, "min_width", 0);
    o(this, "model_value", !1);
    o(this, "no_click_animation", !1);
    o(this, "offset", 10);
    o(this, "open_delay");
    o(this, "open_on_click", !1);
    o(this, "open_on_focus", !1);
    o(this, "open_on_hover", !0);
    o(this, "scrim", !1);
    o(this, "text");
    o(this, "theme");
    o(this, "transition", !1);
    o(this, "width");
    o(this, "z_index", 2e3);
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
  k as Alert,
  b as Button,
  y as FormContainer,
  z as Icon,
  B as Menu,
  x as Tooltip
};
