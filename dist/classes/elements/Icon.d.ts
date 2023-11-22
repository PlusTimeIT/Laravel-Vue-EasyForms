import { Tooltip } from ".";
import { GotProps } from "../../abstracts/GotProps";
import HasIcon from "../../contracts/HasIcon";
export declare class Icon extends GotProps implements HasIcon {
    classes: string | undefined;
    color: string;
    end: boolean;
    icon: string;
    size: string | undefined;
    start: boolean;
    tooltip: Tooltip | undefined;
    tag: string;
    constructor(init?: Partial<Icon>);
    allowedProps(): string[];
}
//# sourceMappingURL=Icon.d.ts.map