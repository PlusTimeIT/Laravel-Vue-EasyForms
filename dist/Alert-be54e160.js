var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { A as AlertTriggers } from "./AlertTriggers-8841b46d.js";
import { B as ButtonVariantTypes } from "./ButtonVariantTypes-e4c42916.js";
import { D as DensityTypes } from "./LocationTypes-8f3d7f01.js";
import { I as Icon } from "./Tooltip-f8329e53.js";
import { G as GotProps } from "./GotProps-440b6309.js";
import { i as isEmpty } from "./Types-dbac3a4a.js";
class Alert extends GotProps {
  constructor(init) {
    super(init);
    __publicField(this, "auto_close_timer", 0);
    __publicField(this, "append_icon");
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
    __publicField(this, "prepend_icon");
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
    if (!isEmpty(init == null ? void 0 : init.icon)) {
      this.prepend_icon = new Icon(init == null ? void 0 : init.icon);
      init == null ? true : delete init.icon;
    }
    Object.assign(this, init);
    this.setDefaults();
    this.original_text = this.text ?? "";
  }
  setDefaults() {
    console.log("setting defaults", this.trigger);
    switch (this.trigger) {
      case AlertTriggers.AfterLoad: {
        this.iconCheck(new Icon({ icon: "mdi-alert-octagon-outline", color: "rgb(var(--v-theme-on-info))" }));
        this.text = this.text ?? "This form has been loaded.";
        this.type = this.type ?? "info";
        break;
      }
      case AlertTriggers.AfterProcessing: {
        this.iconCheck(new Icon({ icon: "mdi-alert-outline", color: "rgb(var(--v-theme-on-info))" }));
        this.text = this.text ?? "This form has been proccessed.";
        this.type = this.type ?? "info";
        break;
      }
      case AlertTriggers.BeforeLoad: {
        this.iconCheck(new Icon({ icon: "mdi-reload-alert", color: "rgb(var(--v-theme-on-info))" }));
        this.text = this.text ?? "This form is about to load.";
        this.type = this.type ?? "info";
        break;
      }
      case AlertTriggers.BeforeProcessing: {
        this.iconCheck(new Icon({ icon: "mdi-shield-alert-outline", color: "rgb(var(--v-theme-on-info))" }));
        this.text = this.text ?? "This form is about to be processed.";
        this.type = this.type ?? "info";
        break;
      }
      case AlertTriggers.Cancelled: {
        this.iconCheck(new Icon({ icon: "mdi-cancel", color: "rgb(var(--v-theme-on-error))" }));
        this.text = this.text ?? "This form has been cancelled.";
        this.type = this.type ?? "error";
        break;
      }
      case AlertTriggers.FailedLoad: {
        this.iconCheck(new Icon({ icon: "mdi-close-octagon-outline", color: "rgb(var(--v-theme-on-error))" }));
        this.text = this.text ?? "This form has failed to load.";
        this.type = this.type ?? "error";
        break;
      }
      case AlertTriggers.FailedProcessing: {
        this.iconCheck(new Icon({ icon: "mdi-emoticon-sad-outline", color: "rgb(var(--v-theme-on-error))" }));
        this.text = this.text ?? "This form has failed to process.";
        this.type = this.type ?? "error";
        break;
      }
      case AlertTriggers.FailedValidation: {
        this.iconCheck(new Icon({ icon: "mdi-alert-decagram", color: "rgb(var(--v-theme-on-error))" }));
        this.text = this.text ?? "This form has validation errors.";
        this.type = this.type ?? "error";
        break;
      }
      case AlertTriggers.FormReset: {
        this.iconCheck(new Icon({ icon: "mdi-recycle", color: "rgb(var(--v-theme-on-warning))" }));
        this.text = this.text ?? "This form has been reset.";
        this.type = this.type ?? "warning";
        break;
      }
      case AlertTriggers.SuccessProcessing: {
        this.iconCheck(new Icon({ icon: "mdi-emoticon-happy-outline", color: "rgb(var(--v-theme-on-success))" }));
        this.text = this.text ?? "This form has successfully processed.";
        this.type = this.type ?? "success";
        break;
      }
      default: {
        this.iconCheck(new Icon({ icon: "mdi-alert-outline", color: "rgb(var(--v-theme-on-info))" }));
        this.text = this.text ?? "";
        this.type = this.type ?? "info";
        break;
      }
    }
  }
  iconCheck(icon) {
    if (!this.append_icon) {
      this.prepend_icon = this.prepend_icon ?? icon;
      this.prepend_icon.size = this.prepend_icon.size ?? "large";
      this.prepend_icon.color = this.prepend_icon.color ?? icon.color;
      this.prepend_icon.icon = this.prepend_icon.icon ?? icon.icon;
    } else {
      this.append_icon.size = this.append_icon.size ?? "large";
      this.append_icon.color = this.append_icon.color ?? icon.color;
      this.append_icon.icon = this.append_icon.icon ?? icon.icon;
    }
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
      "variant"
    ];
  }
  /**
   * Prepares auto close feature
   * @returns Alert
   */
  autoClose() {
    if (this.auto_close_timer !== 0) {
      setTimeout(() => this.hide(), this.auto_close_timer);
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
