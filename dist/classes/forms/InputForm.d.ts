import { EasyForm } from "./EasyForm";
import { JustifyRow } from "#/enums/JustifyRow";
import { AlignRow } from "#/enums/AlignRow";
import { Button } from "#/classes/elements";
import { FieldType } from "#/types/FieldType";
export declare class InputForm extends EasyForm {
    button_align_row: AlignRow;
    button_justify_row: JustifyRow;
    buttons: Button[];
    fields: FieldType[];
    type: string;
    constructor(init?: Partial<InputForm>);
    reset(): this;
    data(): object;
    formatForArrayOrObject(name: string): string;
    process(): Promise<object | boolean>;
    props(): object;
}
//# sourceMappingURL=InputForm.d.ts.map