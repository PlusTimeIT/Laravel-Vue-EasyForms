import { EasyField } from "#/abstracts/EasyField";
import { Icon } from "#/classes/elements";
import { DirectionType } from "#/enums";
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
    allowedProps(): string[];
}
//# sourceMappingURL=FileInputField.d.ts.map