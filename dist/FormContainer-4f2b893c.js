var a = Object.defineProperty;
var l = (s, i, e) => i in s ? a(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[i] = e;
var t = (s, i, e) => (l(s, typeof i != "symbol" ? i + "" : i, e), e);
import { A as r } from "./AlertTriggers-367c8134.js";
import { a as c } from "./ButtonVariantTypes-50d88936.js";
import { D as d } from "./DensityTypes-eaa8882a.js";
import { G as n, i as o, I as h } from "./Icon-67bf229a.js";
class u extends n {
  constructor(e) {
    super(e);
    t(this, "auto_close_timer", 0);
    t(this, "border", !1);
    t(this, "border_color");
    t(this, "closable", !1);
    t(this, "close_icon", "$close");
    t(this, "close_label", "$vuetify.close");
    t(this, "color");
    t(this, "cols", 12);
    t(this, "content_placeholder", "<response-data>");
    t(this, "density", d.Default);
    t(this, "display", !1);
    t(this, "elevation", 0);
    t(this, "height");
    t(this, "icon");
    t(this, "max_height");
    t(this, "max_width");
    t(this, "min_height");
    t(this, "min_width", 0);
    t(this, "original_text", "");
    t(this, "position");
    t(this, "prominent", !1);
    t(this, "rounded", !1);
    t(this, "tag", "div");
    t(this, "text");
    t(this, "trigger", r.SuccessProcessing);
    t(this, "type");
    t(this, "variant", c.Flat);
    Object.assign(this, e), (o(this.text) || o(this.type)) && (this.trigger === r.Cancelled && (this.icon = this.icon ?? (o(this.text) && o(this.type)) ? new h({ icon: "mdi-alert-decagram" }) : void 0, this.text = this.text ?? "This form has been cancelled.", this.type = this.type ?? "warning"), this.trigger === r.FormReset && (this.icon = this.icon ?? (o(this.text) && o(this.type)) ? new h({ icon: "mdi-recycle" }) : void 0, this.text = this.text ?? "This form has been reset.", this.type = this.type ?? "info")), this.original_text = this.text ?? "";
  }
  /**
   * Returns an array of all allowed props that are present on V-Alert
   * https://vuetifyjs.com/en/api/v-alert/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "border",
      "border_color",
      "closable",
      "close_icon",
      "close_label",
      "color",
      "density",
      "elevation",
      "height",
      "icon",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "position",
      "prominent",
      "rounded",
      "tag",
      "text",
      "trigger",
      "type",
      "variant"
    ];
  }
  /**
   * Prepares auto close feature
   * @returns Alert
   */
  autoClose() {
    return this.auto_close_timer !== 0 && setTimeout(() => this.show(), this.auto_close_timer), this;
  }
  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  convertContents(e) {
    return this.text = this.original_text.replace(this.content_placeholder, e), this;
  }
  /**
   * Hide alert
   * @returns Alert
   */
  hide() {
    return this.display = !1, this;
  }
  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  reset() {
    return this.hide(), this.text = this.original_text, this;
  }
  /**
   * Show alert
   * @returns Alert
   */
  show() {
    return this.display = !0, this;
  }
}
class y extends n {
  constructor(e) {
    super(e);
    t(this, "cols", 12);
    t(this, "lg", 12);
    t(this, "md", 12);
    t(this, "sm", 12);
    Object.assign(this, e);
  }
}
export {
  u as A,
  y as F
};
