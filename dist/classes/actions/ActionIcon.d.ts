import { Icon } from "../elements";
import { ConditionItem } from "./ConditionItem";
import HasActionIcon from "../../contracts/HasActionIcon";
export declare class ActionIcon implements HasActionIcon {
    callback: string;
    cols: number;
    conditions: ConditionItem[];
    icon: Icon;
    identifier: string;
    name: string;
    order: number;
    discriminator: string;
    constructor(init?: Partial<ActionIcon>);
}
//# sourceMappingURL=ActionIcon.d.ts.map