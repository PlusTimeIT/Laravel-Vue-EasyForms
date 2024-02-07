var o = Object.defineProperty;
var i = (r, t, s) => t in r ? o(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var e = (r, t, s) => (i(r, typeof t != "symbol" ? t + "" : t, s), s);
import { G as a } from "./GotProps-d4ee0596.js";
import { i as l } from "./Store-03b8f4cc.js";
import { L as c } from "./LocationTypes-c293bdaa.js";
class u extends a {
  constructor(s) {
    super(s);
    e(this, "classes");
    e(this, "bg_color", "white");
    e(this, "color");
    e(this, "indeterminate", !1);
    e(this, "rotate", 0);
    e(this, "size", "default");
    e(this, "tag", "div");
    e(this, "theme");
    e(this, "width");
    Object.assign(this, s), l(this.classes) && (this.classes = "mx-auto my-auto text-center pa-10");
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
class g extends a {
  constructor(s) {
    super(s);
    e(this, "classes");
    e(this, "absolute", !1);
    e(this, "active", !1);
    e(this, "bg_color", "primary");
    e(this, "bg_opacity");
    e(this, "color");
    e(this, "height");
    e(this, "indeterminate", !1);
    e(this, "location", c.Top);
    e(this, "reverse", !1);
    e(this, "rounded", !1);
    e(this, "rounded_bar", !1);
    e(this, "stream", !1);
    e(this, "striped", !1);
    e(this, "tag", "div");
    e(this, "theme");
    Object.assign(this, s);
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
  u as P,
  g as a
};
