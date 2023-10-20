import { EasyField } from "#/abstracts/EasyField";
import { DirectionType } from "#/enums/DirectionType";
import { Icon } from "#/classes/elements";
export declare class CheckboxField extends EasyField {
    center_affix: boolean;
    component: string;
    defaults_target: string | undefined;
    direction: DirectionType;
    false_icon: Icon | string;
    false_value: any;
    hide_details: boolean | "auto";
    indeterminate: boolean;
    indeterminate_icon: Icon | string;
    multiple: boolean;
    ripple: boolean;
    transition: string | boolean;
    true_icon: Icon | string;
    true_value: any;
    type: string;
    constructor(init?: Partial<CheckboxField>);
    allowedProps(): string[];
}
//# sourceMappingURL=CheckboxField.d.ts.map