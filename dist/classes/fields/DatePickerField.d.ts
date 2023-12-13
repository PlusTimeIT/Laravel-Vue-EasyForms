import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu } from "../elements";
import { DatePicker } from "../../classes/fields/DatePicker";
export declare class DatePickerField extends EasyField {
    component: string;
    menu: Menu;
    picker: DatePicker;
    textfield: TextField;
    constructor(init?: Partial<DatePickerField>);
    /**
     * Returns an array of all allowed props that are present on EasyDatePicker
     *
     * Currently missing the following properties:
     *
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=DatePickerField.d.ts.map