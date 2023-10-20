import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu } from "../../classes/elements";
import { ColorPicker } from "../../classes/fields/ColorPicker";
export declare class ColorPickerField extends EasyField {
    component: string;
    menu: Menu;
    picker: ColorPicker;
    textfield: TextField;
    constructor(init?: Partial<ColorPickerField>);
    allowedProps(): string[];
}
//# sourceMappingURL=ColorPickerField.d.ts.map