import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { Icon } from "../../classes/elements";

export class RadioField extends EasyField {
  component = "v-radio";
  defaults_target: string | undefined;
  direction: DirectionType = DirectionType.Horizontal;
  false_icon: Icon | string = "$radioOff";
  false_value: any | undefined;
  inline = false;
  multiple = false;
  ripple = false;
  true_icon: Icon | string = "$radioOn";
  true_value: any | undefined;
  type = "radio";

  constructor(init?: Partial<RadioField>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "color",
      "cols",
      "defaults_target",
      "density",
      "direction",
      "disabled",
      "error",
      "false_icon",
      "false_value",
      "id",
      "inline",
      "label",
      "loading",
      "multiple",
      "name",
      "readonly",
      "ripple",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "value",
      "variant",
    ];
  }
}
