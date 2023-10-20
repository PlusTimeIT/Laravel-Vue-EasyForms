import { EasyForm } from "./EasyForm";
import { JustifyRow } from "../../enums";
import { AlignRow } from "../../enums";
import { Button } from "../../classes/elements";
import type { FieldType } from "../../types";
export declare class InputForm extends EasyForm {
    button_align_row: AlignRow;
    button_justify_row: JustifyRow;
    buttons: Button[];
    fields: FieldType[];
    type: string;
    constructor(init?: Partial<InputForm>);
    data(): object;
    formatForArrayOrObject(name: string): string;
    process(): Promise<object | boolean>;
    props(): object;
    reset(): this;
}
//# sourceMappingURL=InputForm.d.ts.map