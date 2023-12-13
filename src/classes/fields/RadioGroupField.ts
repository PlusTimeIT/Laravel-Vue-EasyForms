import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { Icon } from "../elements";
import { RadioField } from "../../classes/fields/RadioField";
import { isArray, isEmpty } from "../../utils";

export class RadioGroupField extends EasyField {
  component = "v-radio-group";
  defaults_target: string | undefined;
  direction: DirectionType = DirectionType.Horizontal;
  false_icon: Icon | string = "$radioOff";
  height: string | number = "auto";
  inline = false;
  items: RadioField[] = [];
  ripple = false;
  true_icon: Icon | string = "$radioOn";
  type = "radio";

  constructor(init?: Partial<RadioGroupField>) {
    super(init);

    if (!isEmpty(init?.items) && isArray(init?.items)) {
      for (const radio of init?.items ?? []) {
        this.items.push(new RadioField(radio));
      }
      delete init?.items;
    }
    Object.assign(this, init);

    this.discriminator = "RadioGroupField";
  }

  /**
   * Returns an array of all allowed props that are present on V-Radio-Group
   * https://vuetifyjs.com/en/api/v-radio-group/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      "center_affix",
      "color",
      "cols",
      "defaults_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "focused",
      "height",
      "hide_details",
      "hint",
      "id",
      "inline",
      "label",
      "loading",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "type",
      // 'value',
    ];
  }
}
