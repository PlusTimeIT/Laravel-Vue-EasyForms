import { EasyField } from "../../abstracts/EasyField";
import { Icon } from "../elements";
import { DirectionType } from "../../enums";
export declare class TextareaField extends EasyField {
    append_inner_icon: Icon | undefined;
    auto_grow: boolean;
    component: string;
    counter: string | number | boolean;
    direction: DirectionType;
    dirty: boolean;
    masking: string | undefined;
    max_rows: string | number | undefined;
    no_resize: boolean;
    prepend_inner_icon: Icon | undefined;
    rows: string | number | undefined;
    reverse: boolean;
    constructor(init?: Partial<TextareaField>);
    allowedProps(): string[];
}
//# sourceMappingURL=TextareaField.d.ts.map