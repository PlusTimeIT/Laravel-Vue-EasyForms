import { AlertBorders } from "../../enums";
import { AlertTriggers } from "../../enums";
import { Icon } from "./Icon";
import { GotProps } from "../../abstracts/GotProps";
import { DensityTypes } from "../../enums";
import { PositionTypes } from "../../enums";
import { AlertTypes } from "../../enums";
import { ButtonVariantTypes } from "../../enums";
import { isEmpty } from "../../composables/utils";

export class Alert extends GotProps {
  auto_close_timer = 0;
  append_icon: Icon | undefined;
  border: AlertBorders | boolean = false;
  border_color: string | undefined;
  closable = false;
  close_icon: Icon | string = "$close";
  close_label = "$vuetify.close";
  color: string | undefined;
  cols = 12;
  content_placeholder = "<response-data>";
  density: DensityTypes = DensityTypes.Default;
  display = false;
  elevation = 0;
  height: string | number | undefined;
  icon: Icon | undefined;
  prepend_icon: Icon | undefined;
  max_height: string | number | undefined;
  max_width: string | number | undefined;
  min_height: string | number | undefined;
  min_width: string | number | undefined = 0;
  original_text = "";
  position: PositionTypes | undefined;
  prominent = false;
  rounded: string | number | boolean = false;
  tag = "div";
  text: string | undefined;
  trigger: AlertTriggers = AlertTriggers.SuccessProcessing;
  type: AlertTypes | string | undefined;
  variant: ButtonVariantTypes = ButtonVariantTypes.Flat;

  constructor(init?: Partial<Alert>) {
    super(init);

    if (!isEmpty(init?.icon)) {
      this.prepend_icon = new Icon(init?.icon);
      delete init?.icon;
    }
    Object.assign(this, init);

    this.setDefaults();

    this.original_text = this.text ?? "";
  }

  setDefaults(): void {
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

  iconCheck(icon: Icon): void {
    if (!this.append_icon) {
      this.prepend_icon = this.prepend_icon ?? icon;
      // set defaults if not set
      this.prepend_icon.size = this.prepend_icon.size ?? "large";
      this.prepend_icon.color = this.prepend_icon.color ?? icon.color;
      this.prepend_icon.icon = this.prepend_icon.icon ?? icon.icon;
    } else {
      // set defaults if not set
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
  allowedProps(): string[] {
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
      "variant",
    ];
  }

  /**
   * Prepares auto close feature
   * @returns Alert
   */
  autoClose(): Alert {
    if (this.auto_close_timer !== 0) {
      setTimeout(() => this.hide(), this.auto_close_timer);
    }
    return this;
  }

  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  convertContents(text: string): Alert {
    this.text = this.original_text.replace(this.content_placeholder, text);
    return this;
  }

  /**
   * Hide alert
   * @returns Alert
   */
  hide(): Alert {
    this.display = false;
    return this;
  }

  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  reset(): Alert {
    this.hide();
    this.text = this.original_text;
    return this;
  }

  /**
   * Show alert
   * @returns Alert
   */
  show(): Alert {
    this.display = true;
    return this;
  }
}
