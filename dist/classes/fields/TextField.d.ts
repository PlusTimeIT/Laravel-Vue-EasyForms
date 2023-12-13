import { EasyField } from "../../abstracts/EasyField";
import { Icon } from "../elements";
import { DirectionType } from "../../enums";
export declare class TextField extends EasyField {
    append_inner_icon: Icon | undefined;
    component: string;
    counter: string | number | boolean;
    direction: DirectionType;
    dirty: boolean;
    masking: string | undefined;
    prepend_inner_icon: Icon | undefined;
    constructor(init?: Partial<TextField>);
    /**
     * Returns an array of all allowed props that are present on V-Text-Field
     * https://vuetifyjs.com/en/api/v-text-field/
     *
     * Currently missing the following properties:
     * counter-value
     * model-modifiers
     * model-value
     * validation-value
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=TextField.d.ts.map