import { EasyField } from "../../abstracts/EasyField";
import { PositionTypes } from "../../enums";
import { Icon } from "../elements";
import { InputModeTypes } from "../../enums";
import { ViewModeTypes } from "../../enums";

export class DatePicker extends EasyField {
  border: string | number | boolean = false;
  calendar_icon: Icon | string = "$calendar";
  cancel_text = "$vuetify.datePicker.cancel";
  collapse_icon: Icon | string = "$collapse";
  display_date: any;
  elevation: string | number | undefined;
  expand_icon: Icon | string = "$expand";
  format: string | undefined;
  header = "$vuetify.datePicker.header";
  height: string | number | undefined;
  hide_actions = false;
  hide_weekdays = false;
  hover_date: any;
  input_mode: InputModeTypes = InputModeTypes.Calendar;
  input_placeholder = "dd/mm/yyyy";
  input_text = "$vuetify.datePicker.input.placeholder";
  keyboard_icon: Icon | string = "$edit";
  landscape = false;
  max: string | number | Date | undefined;
  max_height: string | number | undefined;
  max_width: string | number | undefined;
  min: string | number | Date | undefined;
  min_height: string | number | undefined;
  min_width: string | number | undefined;
  multiple = false;
  next_icon: Icon | string = "$next";
  ok_text = "$vuetify.datePicker.ok";
  position: PositionTypes | undefined;
  prev_icon: Icon | string = "$prev";
  rounded = false;
  show_adjacent_months = false;
  show_week = false;
  side: string | undefined;
  tag = "div";
  title = "$vuetify.datePicker.title";
  view_mode: ViewModeTypes = ViewModeTypes.Month;
  width: string | number | undefined;

  constructor(init?: Partial<DatePicker>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Date-Picker
   * https://vuetifyjs.com/en/api/v-date-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "border",
      "calendar_icon",
      "cancel_text",
      "collapse_icon",
      "color",
      "disabled",
      "display_date",
      "elevation",
      "expand_icon",
      "format",
      "header",
      "height",
      "hide_actions",
      "hide_weekdays",
      "hover_date",
      "input_mode",
      "input_placeholder",
      "input_text",
      "keyboard_icon",
      "landscape",
      "max",
      "max_height",
      "max_width",
      "min",
      "min_height",
      "min_width",
      "multiple",
      "next_icon",
      "ok_text",
      "position",
      "prev_icon",
      "rounded",
      "show_adjacent_months",
      "show_week",
      "side",
      "tag",
      "title",
      "theme",
      "view_mode",
      "width",
    ];
  }
}
