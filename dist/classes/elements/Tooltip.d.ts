import { LocationTypes, ScrollStrategyTypes } from "../../enums";
import { GotProps } from "../../abstracts/GotProps";
export declare class Tooltip extends GotProps {
    activator: string | undefined;
    attach: string | boolean;
    close_delay: string | number | undefined;
    close_on_back: boolean;
    close_on_content_click: boolean;
    contained: boolean;
    content_class: any;
    content_props: any;
    disabled: boolean;
    eager: boolean;
    id: string | undefined;
    height: string | number | undefined;
    location: LocationTypes;
    max_height: string | number | undefined;
    max_width: string | number | undefined;
    min_height: string | number | undefined;
    min_width: string | number | undefined;
    no_click_animation: boolean;
    offset: string | number | number[];
    open_delay: string | number | undefined;
    open_on_click: boolean;
    open_on_focus: boolean;
    open_on_hover: boolean;
    scrim: string | boolean;
    scroll_strategy: ScrollStrategyTypes;
    text: string | undefined;
    theme: string | undefined;
    transition: string | boolean;
    width: string | number | undefined;
    z_index: string | number | undefined;
    constructor(init?: Partial<Tooltip>);
    /**
     * Returns an array of all allowed props that are present on V-Tooltip
     * https://vuetifyjs.com/en/api/v-tooltip/
     *
     * Currently missing the following properties:
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=Tooltip.d.ts.map