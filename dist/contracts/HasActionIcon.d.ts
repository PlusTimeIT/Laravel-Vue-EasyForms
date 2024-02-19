import type { ConditionItem } from "../classes/actions";
import type { Icon } from "../classes/elements";
export default interface HasActionIcon {
    callback: string;
    cols: number;
    conditions: ConditionItem[];
    icon: Icon;
    identifier: string;
    name: string;
    order: number;
    discriminator: string;
}
//# sourceMappingURL=HasActionIcon.d.ts.map