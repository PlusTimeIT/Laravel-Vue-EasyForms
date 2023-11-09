import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "../../classes/actions";
import { JustifyRow } from "../../enums";
export declare class ActionForm extends EasyForm {
    actions: Array<ActionIcon | ActionButton>;
    callback: string;
    inline: boolean;
    justify_row: JustifyRow;
    type: string;
    constructor(init?: Partial<ActionForm>);
    instantiateAction(className: string, data: any): void;
    data(action_identifier: string): FormData;
    process(action_identifier: string): Promise<object | boolean>;
    props(): object;
}
//# sourceMappingURL=ActionForm.d.ts.map