import { AlertBorders } from "#/enums";
import { AlertTriggers } from "#/enums";
import { Icon } from "./Icon";
import { GotProps } from "#/abstracts/GotProps";
import { DensityTypes } from "#/enums";
import { PositionTypes } from "#/enums";
import { AlertTypes } from "#/enums";
import { ButtonVariantTypes } from "#/enums";
import { isEmpty } from "#/composables/utils/Types";

export class Alert extends GotProps {
  auto_close_timer = 0;
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
    Object.assign(this, init);

    if (isEmpty(this.text) || isEmpty(this.type)) {
      if (this.trigger === AlertTriggers.Cancelled) {
        this.icon =
          this.icon ?? (isEmpty(this.text) && isEmpty(this.type))
            ? new Icon({ icon: "mdi-alert-decagram" })
            : undefined;
        this.text = this.text ?? "This form has been cancelled.";
        this.type = this.type ?? "warning";
      }
      if (this.trigger === AlertTriggers.FormReset) {
        this.icon =
          this.icon ?? (isEmpty(this.text) && isEmpty(this.type)) ? new Icon({ icon: "mdi-recycle" }) : undefined;
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
      "variant",
    ];
  }

  /**
   * Prepares auto close feature
   * @returns Alert
   */
  autoClose(): Alert {
    if (this.auto_close_timer !== 0) {
      setTimeout(() => this.show(), this.auto_close_timer);
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
