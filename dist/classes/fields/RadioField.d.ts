import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { Icon } from "../elements";
export declare class RadioField extends EasyField {
    component: string;
    defaults_target: string | undefined;
    direction: DirectionType;
    false_icon: Icon | string;
    false_value: any | undefined;
    inline: boolean;
    multiple: boolean;
    ripple: boolean;
    true_icon: Icon | string;
    true_value: any | undefined;
    type: string;
    constructor(init?: Partial<RadioField>);
    /**
     * Returns an array of all allowed props that are present on V-Color-Picker
     * https://vuetifyjs.com/en/api/v-color-picker/
     *
     * Currently missing the following properties:
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=RadioField.d.ts.map