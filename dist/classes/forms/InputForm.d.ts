import { EasyForm } from "./EasyForm";
import { FormTypes, JustifyRow } from "../../enums";
import { AlignRow } from "../../enums";
import { Button } from "../elements";
import type { FieldType } from "../../types";
interface ErrorMessage {
    id: string;
    errorMessages: string[];
}
/**
 * Input form that uses input fields
 */
export declare class InputForm extends EasyForm {
    button_align_row: AlignRow;
    button_justify_row: JustifyRow;
    buttons: Button[];
    fields: Array<FieldType>;
    original: Array<FieldType>;
    type: FormTypes;
    constructor(init?: Partial<InputForm>);
    data(): FormData;
    formatForArrayOrObject(name: string): string;
    instantiateField(className: string, fieldData: any): void;
    process(recaptchaToken?: string | undefined): Promise<object | boolean>;
    loadErrorMessages(errors: ErrorMessage[]): this;
    hasErrorMessage(field: FieldType, error: string): boolean;
    /**
     * Provides the props for VForm
     * @returns VForm
     */
    props(): object;
    reset(): this;
}
export {};
//# sourceMappingURL=InputForm.d.ts.map