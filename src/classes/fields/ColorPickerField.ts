import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu, Icon } from "../elements";
import { ColorPicker } from "../../classes/fields/ColorPicker";

export class ColorPickerField extends EasyField {
  component = "easy-color-picker";
  menu: Menu = new Menu();
  picker: ColorPicker = new ColorPicker({});
  textfield: TextField = new TextField({
    name: "picker_value",
    label: "Color Picker",
    readonly: true,
    prepend_inner_icon: new Icon({
      icon: "mdi-square-rounded",
      size: "x-large",
    }),
  });

  constructor(init?: Partial<ColorPickerField>) {
    super(init);
    Object.assign(this, init);
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
