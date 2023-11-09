import { EasyField } from "../../abstracts/EasyField";
import { Icon } from "../elements";
import { DirectionType } from "../../enums";

export class FileInputField extends EasyField {
  accept = "image/png, image/jpeg";
  append_inner_icon: Icon | undefined;
  chips = false;
  component = "v-file-input";
  counter: string | number | boolean = false;
  counter_size_string = "$vuetify.fileInput.counterSize";
  counter_string = "$vuetify.fileInput.counter";
  direction: DirectionType = DirectionType.Horizontal;
  dirty = false;
  multiple = false;
  prepend_inner_icon: Icon | undefined;
  reversed = false;
  show_size: boolean | 1000 | 1024 = false;
  single_line = false;

  constructor(init?: Partial<FileInputField>) {
    super(init);
    Object.assign(this, init);

    this.discriminator = "FileInputField";
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
      "accept",
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      // displayed as easy-icon with tooltip.
      // 'append_inner_icon',
      "base_color",
      "bg_color",
      "center_affix",
      "chips",
      "clearable",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "counter_size_string",
      "counter_string",
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
      "multiple",
      "name",
      "persistent_clear",
      "persistent_hint",
      "placeholder",
      "prefix",
      // displayed as easy-icon with tooltip.
      // "prepend_icon",
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "reverse",
      "rounded",
      "rules",
      "show_size",
      "single_line",
      "theme",
      "validate_on",
      "variant",
    ];
  }
}
