import { Tooltip } from "./Tooltip";
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
//# sourceMappingURL=Icon.d.ts.map