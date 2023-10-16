import { EasyField } from "#/abstracts/EasyField";
import { Icon } from "#/classes/elements";
import { DirectionType } from "#/enums/DirectionType";

export class TextField extends EasyField {
  append_inner_icon: Icon | undefined;
  component = "v-text-field";
  counter: string | number | boolean = false;
  direction: DirectionType = DirectionType.Horizontal;
  dirty = false;
  masking: string | undefined;
  prepend_inner_icon: Icon | undefined;

  constructor(init?: Partial<TextField>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      // displayed as easy-icon with tooltip.
      // 'append_inner_icon',
      "autofocus",
      "attach",
      "base_color",
      "bg_color",
      "center_affix",
      "clearable",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "name",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "reverse",
      "role",
      "rounded",
      // 'rules',
      "single_line",
      "suffix",
      "theme",
      "type",
      "validate_on",
      "variant",
    ];
  }
}
