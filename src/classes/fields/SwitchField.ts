import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { Icon } from "../../classes/elements";

export class SwitchField extends EasyField {
  center_affix = true;
  component = "v-switch";
  defaults_target: string | undefined;
  direction: DirectionType = DirectionType.Horizontal;
  false_icon: Icon | string | undefined;
  false_value: any;
  hide_details: boolean | "auto" = false;
  indeterminate = false;
  inline = false;
  inset = false;
  multiple = false;
  ripple = false;
  transition: string | boolean = false;
  true_icon: Icon | string | undefined;
  true_value: any;
  type = "switch";

  constructor(init?: Partial<SwitchField>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on VSwitch
   * https://vuetifyjs.com/en/api/v-switch/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      // displayed as easy-icon with tooltip.
      //'append_icon',
      "autofocus",
      "center_affix",
      "color",
      "cols",
      "default_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "false_value",
      "focused",
      "hide_details",
      "hint",
      "id",
      "indeterminate",
      "inline",
      "inset",
      "label",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "validate_on",
      // value causes errors due to v-model binding
      //'value'
    ];
  }
}
