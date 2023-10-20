import { EasyField } from "../../abstracts/EasyField";
import { TextField } from "./TextField";
export declare class PasswordField extends EasyField {
    component: string;
    has_lower_case: boolean;
    has_min_length: number | boolean;
    has_numbers: boolean;
    has_special: boolean;
    has_upper_case: boolean;
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