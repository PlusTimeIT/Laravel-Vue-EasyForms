import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu } from "../elements";
import { ColorPicker } from "../../classes/fields/ColorPicker";
export declare class ColorPickerField extends EasyField {
    component: string;
    menu: Menu;
    picker: ColorPicker;
    textfield: TextField;
    constructor(init?: Partial<ColorPickerField>);
    /**
     * Returns an array of all allowed props that are present on V-Checkbox
     * https://vuetifyjs.com/en/api/v-checkbox/
     *
     * Currently missing the following properties:
     *
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=ColorPickerField.d.ts.map