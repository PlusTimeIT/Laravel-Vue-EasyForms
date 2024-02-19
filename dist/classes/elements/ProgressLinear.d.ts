import { Tooltip } from "./Tooltip";
import { GotProps } from "../../abstracts/GotProps";
import { LocationTypes } from "../../enums";
export declare class ProgressLinear extends GotProps {
    classes: string | undefined;
    absolute: boolean;
    active: boolean;
    bg_color: string | undefined;
    bg_opacity: string | number | undefined;
    color: string | undefined;
    height: string | number | undefined;
    indeterminate: string | boolean;
    location: LocationTypes;
    reverse: boolean;
    rounded: boolean;
    rounded_bar: boolean;
    stream: boolean;
    striped: boolean;
    tag: string | undefined;
    theme: Tooltip | undefined;
    constructor(init?: Partial<ProgressLinear>);
    /**
     * Returns an array of all allowed props that are present on V-Icon
     * https://vuetifyjs.com/en/api/v-icon/
     *
     * Currently missing the following properties:
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=ProgressLinear.d.ts.map