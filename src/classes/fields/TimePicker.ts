import { EasyField } from "../../abstracts/EasyField";
import { PositionTypes } from "../../enums";
import { TimePickerModeTypes } from "../../enums";

export class TimePicker extends EasyField {
  cancel_text = "cancel";
  close_on_outside_click = true;
  elevation: string | number | undefined;
  header = "";
  height: string | number | undefined;
  hide_actions = false;
  mode: TimePickerModeTypes = TimePickerModeTypes.Normal;
  ok_text = "ok";
  pad_start = true;
  position: PositionTypes | undefined;
  rolling_numbers = true;
  tag = "div";
  title = "select time";
  width: string | number | undefined;

  constructor(init?: Partial<TimePicker>) {
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
      "close_on_outside_click",
      "cancel_text",
      "color",
      "disabled",
      "elevation",
      "header",
      "height",
      "hide_actions",
      "mode",
      "ok_text",
      "pad_start",
      "position",
      "rolling_numbers",
      "rounded",
      "tag",
      "title",
      "theme",
      "width",
    ];
  }
}
