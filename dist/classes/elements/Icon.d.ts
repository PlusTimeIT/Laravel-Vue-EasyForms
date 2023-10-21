import { Tooltip } from ".";
import { GotProps } from "../../abstracts/GotProps";
import HasIcon from "../../contracts/HasIcon";
export declare class Icon extends GotProps implements HasIcon {
    class: string | undefined;
    color: string;
    icon: string;
    size: string | undefined;
    tooltip: Tooltip | undefined;
    constructor(init?: Partial<Icon>);
    allowedProps(): string[];
}
//# sourceMappingURL=Icon.d.ts.map