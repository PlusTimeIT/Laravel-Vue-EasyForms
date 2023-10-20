import { LocationTypes } from "#/enums/LocationTypes";
import { ScrollStrategyTypes } from "#/enums/ScrollStrategyTypes";
import { GotProps } from "#/abstracts/GotProps";
export declare class Menu extends GotProps {
    activator: string | undefined;
    attach: string | boolean;
    close_delay: string | number;
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
    no_click_animation: boolean;
    open_delay: string | number;
    open_on_click: boolean;
    open_on_focus: boolean;
    open_on_hover: boolean;
    persistent: string | boolean;
    scrim: string | boolean;
    scroll_strategy: ScrollStrategyTypes;
    width: string | number | undefined;
    z_index: string | number | undefined;
    constructor(init?: Partial<Menu>);
    allowedProps(): string[];
}
//# sourceMappingURL=Menu.d.ts.map