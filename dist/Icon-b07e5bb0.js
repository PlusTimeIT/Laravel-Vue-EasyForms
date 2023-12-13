var _ = Object.defineProperty;
var n = (t, s, e) => s in t ? _(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var o = (t, s, e) => (n(t, typeof s != "symbol" ? s + "" : s, e), e);
import { i as l } from "./Store-dda3f8ae.js";
import { L as r } from "./LocationTypes-c293bdaa.js";
import { S as p } from "./ScrollStrategyTypes-59a25e2a.js";
import { G as c } from "./GotProps-ebb373b7.js";
class a extends c {
  constructor(e) {
    super(e);
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
    o(this, "id");
    o(this, "height");
    o(this, "location", r.Top);
    o(this, "max_height");
    o(this, "max_width");
    o(this, "min_height");
    o(this, "min_width", 0);
    o(this, "no_click_animation", !1);
    o(this, "offset", 10);
    o(this, "open_delay");
    o(this, "open_on_click", !1);
    o(this, "open_on_focus", !1);
    o(this, "open_on_hover", !0);
    o(this, "scrim", !1);
    o(this, "scroll_strategy", p.Close);
    o(this, "text");
    o(this, "theme");
    o(this, "transition", !1);
    o(this, "width");
    o(this, "z_index", 2e3);
    Object.assign(this, e), l(this.text) && (this.open_on_click = !1, this.open_on_focus = !1, this.open_on_hover = !1, this.disabled = !0);
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
class g extends c {
  constructor(e) {
    super(e);
    o(this, "classes");
    o(this, "color", "primary");
    o(this, "end", !1);
    o(this, "icon", "");
    o(this, "size");
    o(this, "start", !1);
    o(this, "tooltip");
    o(this, "tag", "i");
    l(e == null ? void 0 : e.tooltip) || ((e == null ? void 0 : e.tooltip) instanceof a ? this.tooltip = e == null ? void 0 : e.tooltip : this.tooltip = new a(e == null ? void 0 : e.tooltip), e == null || delete e.tooltip), Object.assign(this, e), l(this.tooltip) && (this.tooltip = new a({ disabled: !0 }));
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
    return ["classes", "color", "end", "icon", "size", "start", "tag", "theme"];
  }
}
export {
  g as I,
  a as T
};
