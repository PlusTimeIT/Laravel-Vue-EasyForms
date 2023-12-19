var d = Object.defineProperty;
var r = (s, a, e) => a in s ? d(s, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[a] = e;
var o = (s, a, e) => (r(s, typeof a != "symbol" ? a + "" : a, e), e);
import { I as p, T as c } from "./Icon-45b27861.js";
import { a as h, B as t } from "./ButtonVariantTypes-85a127bd.js";
import { D as f } from "./ScrollStrategyTypes-59a25e2a.js";
import { G as m } from "./GotProps-a841b1a8.js";
import { i as l } from "./Store-dda3f8ae.js";
class x extends m {
  constructor(e) {
    super(e);
    o(this, "active", !1);
    o(this, "append_icon");
    o(this, "block", !1);
    o(this, "border", !1);
    o(this, "classes", "");
    o(this, "color", "primary");
    o(this, "density", f.Default);
    o(this, "disabled", !1);
    o(this, "elevation", 0);
    o(this, "exact", !1);
    o(this, "flat", !1);
    o(this, "height");
    o(this, "href");
    o(this, "icon");
    o(this, "loading", !1);
    o(this, "max_height");
    o(this, "max_width");
    o(this, "min_height");
    o(this, "min_width", 0);
    o(this, "order", 0);
    o(this, "position");
    o(this, "prepend_icon");
    o(this, "replace", !1);
    o(this, "rounded", !1);
    o(this, "selected_class");
    o(this, "size", "default");
    o(this, "stacked", !1);
    o(this, "symbol");
    o(this, "tag", "button");
    o(this, "text");
    o(this, "theme");
    o(this, "to");
    o(this, "tooltip");
    o(this, "type", h.Process);
    o(this, "value");
    o(this, "variant", t.Elevated);
    o(this, "width");
    l(e == null ? void 0 : e.append_icon) || (this.append_icon = new p(e == null ? void 0 : e.append_icon), e == null || delete e.append_icon), l(e == null ? void 0 : e.prepend_icon) || (this.prepend_icon = new p(e == null ? void 0 : e.prepend_icon), e == null || delete e.prepend_icon), l(e == null ? void 0 : e.icon) || (this.icon = new p(e == null ? void 0 : e.icon), e == null || delete e.icon), l(e == null ? void 0 : e.tooltip) || (this.tooltip = new c(e == null ? void 0 : e.tooltip), e == null || delete e.tooltip), Object.assign(this, e);
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
  x as B
};
