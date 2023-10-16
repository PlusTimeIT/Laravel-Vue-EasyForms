import { EasyField } from "#/abstracts/EasyField";
import { DirectionType } from "#/enums/DirectionType";
import { Icon } from "#/classes/elements";
import { RadioField } from "#/classes/fields";
export declare class RadioGroupField extends EasyField {
    component: string;
    defaults_target: string | undefined;
    direction: DirectionType;
    false_icon: Icon | string;
    height: string | number;
    inline: boolean;
    items: RadioField[];
    ripple: boolean;
    true_icon: Icon | string;
    type: string;
    constructor(init?: Partial<RadioGroupField>);
    allowedProps(): string[];
}
//# sourceMappingURL=RadioGroupField.d.ts.map