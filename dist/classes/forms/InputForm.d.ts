import { EasyForm } from "./EasyForm";
import { JustifyRow } from "../../enums";
import { AlignRow } from "../../enums";
import { Button } from "../elements";
import type { FieldType } from "../../types";
interface ErrorMessage {
    id: string;
    errorMessages: string[];
}
export declare class InputForm extends EasyForm {
    button_align_row: AlignRow;
    button_justify_row: JustifyRow;
    buttons: Button[];
    fields: Array<FieldType>;
    original: Array<FieldType>;
    type: string;
    constructor(init?: Partial<InputForm>);
    data(): object;
    formatForArrayOrObject(name: string): string;
    instantiateField(className: string, fieldData: any): void;
    process(): Promise<object | boolean>;
    loadErrorMessages(errors: ErrorMessage[]): this;
    hasErrorMessage(field: FieldType, error: string): boolean;
    props(): object;
    reset(): this;
}
export {};
//# sourceMappingURL=InputForm.d.ts.map