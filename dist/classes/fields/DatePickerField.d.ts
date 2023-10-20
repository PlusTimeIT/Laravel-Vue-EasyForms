import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu } from "../../classes/elements";
import { DatePicker } from "../../classes/fields/DatePicker";
export declare class DatePickerField extends EasyField {
    component: string;
    menu: Menu;
    picker: DatePicker;
    textfield: TextField;
    constructor(init?: Partial<DatePickerField>);
    allowedProps(): string[];
}
//# sourceMappingURL=DatePickerField.d.ts.map