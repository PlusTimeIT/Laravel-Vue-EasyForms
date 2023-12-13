import HasField from "../../contracts/HasField";
import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu, Icon } from "../elements";
import { TimePicker } from "../../classes/fields/TimePicker";

export class TimePickerField extends EasyField implements HasField {
  component = "easy-time-picker";
  menu: Menu = new Menu();
  picker: TimePicker = new TimePicker({
    width: 360,
  });
  textfield: TextField = new TextField({
    label: "Time Picker",
    readonly: true,
    prepend_inner_icon: new Icon({
      icon: "mdi-clock-outline",
      size: "large",
    }),
  });

  constructor(init?: Partial<TimePickerField>) {
    super(init);
    Object.assign(this, init);

    this.discriminator = "TimePickerField";
  }

  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
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
