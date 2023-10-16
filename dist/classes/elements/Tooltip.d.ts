import { LocationTypes } from "#/enums/LocationTypes";
import { GotProps } from "#/abstracts/GotProps";
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
    height: string | number | undefined;
    location: LocationTypes;
    max_height: string | number | undefined;
    max_width: string | number | undefined;
    min_height: string | number | undefined;
    min_width: string | number | undefined;
    model_value: boolean;
    no_click_animation: boolean;
    offset: string | number | number[];
    open_delay: string | number | undefined;
    open_on_click: boolean;
    open_on_focus: boolean;
    open_on_hover: boolean;
    scrim: string | boolean;
    text: string | undefined;
    theme: string | undefined;
    transition: string | boolean;
    width: string | number | undefined;
    z_index: string | number | undefined;
    constructor(init?: Partial<Tooltip>);
    allowedProps(): string[];
}
//# sourceMappingURL=Tooltip.d.ts.map