import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { Icon } from "../../classes/elements";
export declare class SwitchField extends EasyField {
    center_affix: boolean;
    component: string;
    defaults_target: string | undefined;
    direction: DirectionType;
    false_icon: Icon | string | undefined;
    false_value: any;
    hide_details: boolean | "auto";
    indeterminate: boolean;
    inline: boolean;
    inset: boolean;
    multiple: boolean;
    ripple: boolean;
    transition: string | boolean;
    true_icon: Icon | string | undefined;
    true_value: any;
    type: string;
    constructor(init?: Partial<SwitchField>);
    allowedProps(): string[];
}
//# sourceMappingURL=SwitchField.d.ts.map