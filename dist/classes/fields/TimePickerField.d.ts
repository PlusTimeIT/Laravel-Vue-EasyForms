import HasField from "../../contracts/HasField";
import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu } from "../elements";
import { TimePicker } from "../../classes/fields/TimePicker";
export declare class TimePickerField extends EasyField implements HasField {
    component: string;
    menu: Menu;
    picker: TimePicker;
    textfield: TextField;
    constructor(init?: Partial<TimePickerField>);
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
//# sourceMappingURL=TimePickerField.d.ts.map