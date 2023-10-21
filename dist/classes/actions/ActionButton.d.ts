import { Button } from "../elements";
import { ConditionItem } from "./ConditionItem";
export declare class ActionButton {
    button: Button;
    callback: string;
    cols: number;
    conditions: ConditionItem[];
    identifier: string;
    name: string;
    order: number;
    constructor(init?: Partial<ActionButton>);
}
//# sourceMappingURL=ActionButton.d.ts.map