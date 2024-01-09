import { GotProps } from "../../abstracts/GotProps";
export declare class ProgressCircular extends GotProps {
    classes: string | undefined;
    bg_color: string | undefined;
    color: string | undefined;
    indeterminate: string | boolean;
    rotate: string | number;
    size: string | number;
    tag: string | undefined;
    theme: string | undefined;
    width: string | undefined;
    constructor(init?: Partial<ProgressCircular>);
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
//# sourceMappingURL=ProgressCircular.d.ts.map