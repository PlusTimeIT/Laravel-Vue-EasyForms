import HasField from "../../contracts/HasField";
import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
import { Menu } from "../../classes/elements";
import { TimePicker } from "../../classes/fields";
export declare class TimePickerField extends EasyField implements HasField {
    component: string;
    menu: Menu;
    picker: TimePicker;
    textfield: TextField;
    constructor(init?: Partial<TimePickerField>);
    allowedProps(): string[];
}
//# sourceMappingURL=TimePickerField.d.ts.map