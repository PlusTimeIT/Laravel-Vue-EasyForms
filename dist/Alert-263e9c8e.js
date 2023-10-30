var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { A as AlertTriggers } from "./AlertTriggers-8841b46d.js";
import { B as ButtonVariantTypes } from "./ButtonVariantTypes-e4c42916.js";
import { D as DensityTypes } from "./LocationTypes-8f3d7f01.js";
import { G as GotProps, I as Icon } from "./Tooltip-ee47020d.js";
import { i as isEmpty } from "./Types-9f7b5c2f.js";
class Alert extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "auto_close_timer", 0);
    __publicField(this, "border", false);
    __publicField(this, "border_color");
    __publicField(this, "closable", false);
    __publicField(this, "close_icon", "$close");
    __publicField(this, "close_label", "$vuetify.close");
    __publicField(this, "color");
    __publicField(this, "cols", 12);
    __publicField(this, "content_placeholder", "<response-data>");
    __publicField(this, "density", DensityTypes.Default);
    __publicField(this, "display", false);
    __publicField(this, "elevation", 0);
    __publicField(this, "height");
    __publicField(this, "icon");
    __publicField(this, "max_height");
    __publicField(this, "max_width");
    __publicField(this, "min_height");
    __publicField(this, "min_width", 0);
    __publicField(this, "original_text", "");
    __publicField(this, "position");
    __publicField(this, "prominent", false);
    __publicField(this, "rounded", false);
    __publicField(this, "tag", "div");
    __publicField(this, "text");
    __publicField(this, "trigger", AlertTriggers.SuccessProcessing);
    __publicField(this, "type");
    __publicField(this, "variant", ButtonVariantTypes.Flat);
    Object.assign(this, init);
    if (!isEmpty(init.icon)) {
      this.icon = new Icon(init == null ? void 0 : init.icon);
      init == null ? true : delete init.icon;
    }
    if (isEmpty(this.text) || isEmpty(this.type)) {
      if (this.trigger === AlertTriggers.Cancelled) {
        this.icon = this.icon ?? (isEmpty(this.text) && isEmpty(this.type)) ? new Icon({ icon: "mdi-alert-decagram" }) : void 0;
        this.text = this.text ?? "This form has been cancelled.";
        this.type = this.type ?? "warning";
      }
      if (this.trigger === AlertTriggers.FormReset) {
        this.icon = this.icon ?? (isEmpty(this.text) && isEmpty(this.type)) ? new Icon({ icon: "mdi-recycle" }) : void 0;
        this.text = this.text ?? "This form has been reset.";
        this.type = this.type ?? "info";
      }
    }
    this.original_text = this.text ?? "";
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
    if (this.auto_close_timer !== 0) {
      setTimeout(() => this.show(), this.auto_close_timer);
    }
    return this;
  }
  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  convertContents(text) {
    this.text = this.original_text.replace(this.content_placeholder, text);
    return this;
  }
  /**
   * Hide alert
   * @returns Alert
   */
  hide() {
    this.display = false;
    return this;
  }
  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  reset() {
    this.hide();
    this.text = this.original_text;
    return this;
  }
  /**
   * Show alert
   * @returns Alert
   */
  show() {
    this.display = true;
    return this;
  }
}
export {
  Alert as A
};
