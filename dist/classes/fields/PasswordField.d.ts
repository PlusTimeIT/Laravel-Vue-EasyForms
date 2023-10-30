import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
export declare class PasswordField extends EasyField {
    component: string;
    lower_case: boolean;
    min_length: number | boolean;
    numbers: boolean;
    special: boolean;
    upper_case: boolean;
    show_strength_bar: boolean;
    strength_error_color: string;
    strength_error_text: string;
    strength_success_color: string;
    strength_success_text: string;
    strength_warning_color: string;
    strength_warning_text: string;
    textfield: TextField;
    view_mode: boolean;
    constructor(init?: Partial<PasswordField>);
    allowedProps(): string[];
}
//# sourceMappingURL=PasswordField.d.ts.map