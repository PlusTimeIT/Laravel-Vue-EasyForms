import { EasyField } from "../../abstracts/EasyField";
import { Icon } from "../elements";
import { DirectionType } from "../../enums";
export declare class TextField extends EasyField {
    append_inner_icon: Icon | undefined;
    component: string;
    counter: string | number | boolean;
    discriminator: "TextField";
    direction: DirectionType;
    dirty: boolean;
    masking: string | undefined;
    prepend_inner_icon: Icon | undefined;
    constructor(init?: Partial<TextField>);
    allowedProps(): string[];
}
//# sourceMappingURL=TextField.d.ts.map