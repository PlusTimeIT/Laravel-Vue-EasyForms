import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "#/classes/actions";
import { JustifyRow } from "#/enums/JustifyRow";
export declare class ActionForm extends EasyForm {
    actions: Array<ActionIcon | ActionButton>;
    callback: string;
    justify_row: JustifyRow;
    inline: boolean;
    type: string;
    constructor(init?: Partial<ActionForm>);
    process(action_identifier: string): Promise<object | boolean>;
    data(action_identifier: string): FormData;
    props(): object;
}
//# sourceMappingURL=ActionForm.d.ts.map