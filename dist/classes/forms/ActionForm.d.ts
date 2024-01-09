import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "../actions";
import { FormTypes, JustifyRow } from "../../enums";
import HasActionForm from "../../contracts/HasActionForm";
/**
 * Action form that uses action buttons and icons.
 */
export declare class ActionForm extends EasyForm implements HasActionForm {
    actions: Array<ActionIcon | ActionButton>;
    callback: string;
    inline: boolean;
    justify_row: JustifyRow;
    type: FormTypes;
    constructor(init?: Partial<ActionForm>);
    instantiateAction(className: string, data: any): void;
    data(action_identifier: string): FormData;
    process(action_identifier: string): Promise<object | boolean>;
    props(): object;
}
//# sourceMappingURL=ActionForm.d.ts.map