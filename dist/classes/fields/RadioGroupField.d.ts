import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { Icon } from "../elements";
import { RadioField } from "../../classes/fields/RadioField";
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
    /**
     * Returns an array of all allowed props that are present on V-Radio-Group
     * https://vuetifyjs.com/en/api/v-radio-group/
     *
     * Currently missing the following properties:
     * location
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=RadioGroupField.d.ts.map