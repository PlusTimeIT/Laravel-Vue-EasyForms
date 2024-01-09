import { Tooltip } from "./Tooltip";
import { Icon } from "./Icon";
import { ButtonTypes } from "../../enums";
import { DensityTypes } from "../../enums";
import { PositionTypes } from "../../enums";
import { ButtonVariantTypes } from "../../enums";
import { GotProps } from "../../abstracts/GotProps";
export declare class Button extends GotProps {
    active: boolean;
    append_icon: Icon | undefined;
    block: boolean;
    border: string | number | boolean;
    classes: string;
    color: string;
    density: DensityTypes;
    disabled: boolean;
    elevation: string | number;
    exact: boolean;
    flat: boolean;
    height: string | number | undefined;
    href: string | undefined;
    icon: Icon | undefined;
    loading: boolean;
    max_height: string | number | undefined;
    max_width: string | number | undefined;
    min_height: string | number | undefined;
    min_width: string | number | undefined;
    order: number;
    position: PositionTypes | undefined;
    prepend_icon: Icon | undefined;
    replace: boolean;
    rounded: string | number | boolean;
    selected_class: string | undefined;
    size: string | number;
    stacked: boolean;
    symbol: any;
    tag: string;
    text: string | undefined;
    theme: string | undefined;
    to: unknown | undefined;
    tooltip: Tooltip | undefined;
    type: ButtonTypes;
    value: any | undefined;
    variant: ButtonVariantTypes;
    width: string | number | undefined;
    constructor(init?: Partial<Button>);
    /**
     * Returns an array of all allowed props that are present on V-Btn
     * https://vuetifyjs.com/en/api/v-btn/
     *
     * Currently missing the following properties:
     * location
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=Button.d.ts.map