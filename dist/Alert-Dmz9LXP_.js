var h = Object.defineProperty;
var c = (r, s, e) => s in r ? h(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var t = (r, s, e) => (c(r, typeof s != "symbol" ? s + "" : s, e), e);
import { A as i } from "./AlertTriggers-cgUyFNKK.js";
import { B as n } from "./ButtonVariantTypes-BAysDaum.js";
import { D as a } from "./ScrollStrategyTypes-E4DrddYC.js";
import { I as o } from "./Icon-DH81jwGa.js";
import { G as l } from "./GotProps-DcRlB6g3.js";
import { i as p } from "./Store-RDttjRLY.js";
class y extends l {
  constructor(e) {
    super(e);
    t(this, "auto_close_timer", 0);
    t(this, "append_icon");
    t(this, "border", !1);
    t(this, "border_color");
    t(this, "closable", !1);
    t(this, "close_icon", "$close");
    t(this, "close_label", "$vuetify.close");
    t(this, "color");
    t(this, "cols", 12);
    t(this, "content_placeholder", "<response-data>");
    t(this, "density", a.Default);
    t(this, "display", !1);
    t(this, "elevation", 0);
    t(this, "height");
    t(this, "icon");
    t(this, "prepend_icon");
    t(this, "position");
    t(this, "prominent", !1);
    t(this, "max_height");
    t(this, "max_width");
    t(this, "min_height");
    t(this, "min_width", 0);
    t(this, "original_text", "");
    t(this, "rounded", !1);
    t(this, "tag", "div");
    t(this, "text");
    t(this, "title");
    t(this, "trigger", i.SuccessProcessing);
    t(this, "type");
    t(this, "variant", n.Flat);
    p(e == null ? void 0 : e.icon) || ((e == null ? void 0 : e.icon) instanceof o ? this.prepend_icon = e == null ? void 0 : e.icon : this.prepend_icon = new o(e == null ? void 0 : e.icon), e == null || delete e.icon), Object.assign(this, e), this.setDefaults(), this.original_text = this.text ?? "";
  }
  setDefaults() {
    switch (this.trigger) {
      case i.AfterLoad: {
        this.iconCheck(new o({ icon: "mdi-alert-octagon-outline", color: "rgb(var(--v-theme-on-info))" })), this.text = this.text ?? "This form has been loaded.", this.type = this.type ?? "info";
        break;
      }
      case i.AfterProcessing: {
        this.iconCheck(new o({ icon: "mdi-alert-outline", color: "rgb(var(--v-theme-on-info))" })), this.text = this.text ?? "This form has been proccessed.", this.type = this.type ?? "info";
        break;
      }
      case i.BeforeLoad: {
        this.iconCheck(new o({ icon: "mdi-reload-alert", color: "rgb(var(--v-theme-on-info))" })), this.text = this.text ?? "This form is about to load.", this.type = this.type ?? "info";
        break;
      }
      case i.BeforeProcessing: {
        this.iconCheck(new o({ icon: "mdi-shield-alert-outline", color: "rgb(var(--v-theme-on-info))" })), this.text = this.text ?? "This form is about to be processed.", this.type = this.type ?? "info";
        break;
      }
      case i.Cancelled: {
        this.iconCheck(new o({ icon: "mdi-cancel", color: "rgb(var(--v-theme-on-error))" })), this.text = this.text ?? "This form has been cancelled.", this.type = this.type ?? "error";
        break;
      }
      case i.FailedLoad: {
        this.iconCheck(new o({ icon: "mdi-close-octagon-outline", color: "rgb(var(--v-theme-on-error))" })), this.text = this.text ?? "This form has failed to load.", this.type = this.type ?? "error";
        break;
      }
      case i.FailedProcessing: {
        this.iconCheck(new o({ icon: "mdi-emoticon-sad-outline", color: "rgb(var(--v-theme-on-error))" })), this.text = this.text ?? "This form has failed to process.", this.type = this.type ?? "error";
        break;
      }
      case i.FailedValidation: {
        this.iconCheck(new o({ icon: "mdi-alert-decagram", color: "rgb(var(--v-theme-on-error))" })), this.text = this.text ?? "This form has validation errors.", this.type = this.type ?? "error";
        break;
      }
      case i.FormReset: {
        this.iconCheck(new o({ icon: "mdi-recycle", color: "rgb(var(--v-theme-on-warning))" })), this.text = this.text ?? "This form has been reset.", this.type = this.type ?? "warning";
        break;
      }
      case i.SuccessProcessing: {
        this.iconCheck(new o({ icon: "mdi-emoticon-happy-outline", color: "rgb(var(--v-theme-on-success))" })), this.text = this.text ?? "This form has successfully processed.", this.type = this.type ?? "success";
        break;
      }
      default: {
        this.iconCheck(new o({ icon: "mdi-alert-outline", color: "rgb(var(--v-theme-on-info))" })), this.text = this.text ?? "", this.type = this.type ?? "info";
        break;
      }
    }
  }
  iconCheck(e) {
    this.append_icon ? (this.append_icon.size = this.append_icon.size ?? "large", this.append_icon.color = this.append_icon.color ?? e.color, this.append_icon.icon = this.append_icon.icon ?? e.icon) : (this.prepend_icon = this.prepend_icon ?? e, this.prepend_icon.size = this.prepend_icon.size ?? "large", this.prepend_icon.color = this.prepend_icon.color ?? e.color, this.prepend_icon.icon = this.prepend_icon.icon ?? e.icon);
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
      // "icon",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "position",
      "prominent",
      "rounded",
      "tag",
      "trigger",
      "type",
      "title",
      "variant"
    ];
  }
  /**
   * Prepares auto close feature
   * @returns Alert
   */
  autoClose() {
    return this.auto_close_timer !== 0 && setTimeout(() => this.hide(), this.auto_close_timer), this;
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
export {
  y as A
};
