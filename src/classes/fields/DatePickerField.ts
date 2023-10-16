import { EasyField } from "#/abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu, Icon } from "#/classes/elements";
import { DatePicker } from "#/classes/fields/DatePicker";

export class DatePickerField extends EasyField {
  component = "easy-date-picker";
  menu: Menu = new Menu({
    close_on_content_click: false,
    open_delay: 0,
  });
  picker: DatePicker = new DatePicker({
    width: 360,
    format: "YYYY-MM-DD",
  });
  textfield: TextField = new TextField({
    name: "date_picker_value",
    label: "Date Picker",
    readonly: true,
    prepend_inner_icon: new Icon({
      icon: "mdi-calendar-month",
      size: "large",
    }),
  });

  constructor(init?: Partial<DatePickerField>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on EasyDatePicker
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return ["menu", "textfield", "picker"];
  }
}
