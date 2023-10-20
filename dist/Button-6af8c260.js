var o = Object.defineProperty;
var i = (s, t, a) => t in s ? o(s, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[t] = a;
var e = (s, t, a) => (i(s, typeof t != "symbol" ? t + "" : t, a), a);
import { B as l } from "./ButtonTypes-4a9e277c.js";
import { B as r } from "./ButtonVariantTypes-6c8b0d38.js";
import { D as d } from "./DensityTypes-eaa8882a.js";
import { G as n } from "./Icon-29f81fc8.js";
class u extends n {
  constructor(a) {
    super(a);
    e(this, "active", !1);
    e(this, "append_icon");
    e(this, "block", !1);
    e(this, "border", !1);
    e(this, "class", "");
    e(this, "color", "primary");
    e(this, "density", d.Default);
    e(this, "disabled", !1);
    e(this, "elevation", 0);
    e(this, "exact", !1);
    e(this, "flat", !1);
    e(this, "height");
    e(this, "href");
    e(this, "icon");
    e(this, "loading", !1);
    e(this, "max_height");
    e(this, "max_width");
    e(this, "min_height");
    e(this, "min_width", 0);
    e(this, "order", 0);
    e(this, "position");
    e(this, "prepend_icon");
    e(this, "replace", !1);
    e(this, "rounded", !1);
    e(this, "selected_class");
    e(this, "size", "default");
    e(this, "stacked", !1);
    e(this, "symbol");
    e(this, "tag", "button");
    e(this, "text");
    e(this, "theme");
    e(this, "to");
    e(this, "tooltip");
    e(this, "type", l.Process);
    e(this, "value");
    e(this, "variant", r.Elevated);
    e(this, "width");
    Object.assign(this, a);
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
  u as B
};
