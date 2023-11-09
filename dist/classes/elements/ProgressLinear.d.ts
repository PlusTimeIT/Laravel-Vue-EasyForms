import { Tooltip } from ".";
import { GotProps } from "../../abstracts/GotProps";
import { LocationTypes } from "../../enums";
export declare class ProgressLinear extends GotProps {
    class: string | undefined;
    absolute: boolean;
    active: boolean;
    bg_color: string | undefined;
    bg_opacity: string | number | undefined;
    color: string | undefined;
    height: string | number | undefined;
    indeterminate: string | boolean;
    location: LocationTypes.Top;
    reverse: boolean;
    rounded: boolean;
    rounded_bar: boolean;
    stream: boolean;
    striped: boolean;
    tag: string | undefined;
    theme: Tooltip | undefined;
    constructor(init?: Partial<ProgressLinear>);
    allowedProps(): string[];
}
//# sourceMappingURL=ProgressLinear.d.ts.map