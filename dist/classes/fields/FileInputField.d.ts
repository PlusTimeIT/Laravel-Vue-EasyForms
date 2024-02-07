import { EasyField } from "../../abstracts/EasyField";
import { Icon } from "../elements";
import { DirectionType } from "../../enums";
export declare class FileInputField extends EasyField {
    accept: string;
    append_inner_icon: Icon | undefined;
    chips: boolean;
    component: string;
    counter: string | number | boolean;
    counter_size_string: string;
    counter_string: string;
    direction: DirectionType;
    dirty: boolean;
    multiple: boolean;
    prepend_inner_icon: Icon | undefined;
    reversed: boolean;
    show_size: boolean | 1000 | 1024;
    single_line: boolean;
    constructor(init?: Partial<FileInputField>);
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
//# sourceMappingURL=FileInputField.d.ts.map