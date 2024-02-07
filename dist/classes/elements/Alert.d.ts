import { AlertBorders } from "../../enums";
import { AlertTriggers } from "../../enums";
import { Icon } from "./Icon";
import { GotProps } from "../../abstracts/GotProps";
import { DensityTypes } from "../../enums";
import { PositionTypes } from "../../enums";
import { AlertTypes } from "../../enums";
import { ButtonVariantTypes } from "../../enums";
export declare class Alert extends GotProps {
    auto_close_timer: number;
    append_icon: Icon | undefined;
    border: AlertBorders | boolean;
    border_color: string | undefined;
    closable: boolean;
    close_icon: Icon | string;
    close_label: string;
    color: string | undefined;
    cols: number;
    content_placeholder: string;
    density: DensityTypes;
    display: boolean;
    elevation: number;
    height: string | number | undefined;
    icon: Icon | undefined;
    prepend_icon: Icon | undefined;
    position: PositionTypes | undefined;
    prominent: boolean;
    max_height: string | number | undefined;
    max_width: string | number | undefined;
    min_height: string | number | undefined;
    min_width: string | number | undefined;
    original_text: string;
    rounded: string | number | boolean;
    tag: string;
    text: string | undefined;
    title: string | undefined;
    trigger: AlertTriggers;
    type: AlertTypes | string | undefined;
    variant: ButtonVariantTypes;
    constructor(init?: Partial<Alert>);
    setDefaults(): void;
    iconCheck(icon: Icon): void;
    /**
     * Returns an array of all allowed props that are present on V-Alert
     * https://vuetifyjs.com/en/api/v-alert/
     *
     * Currently missing the following properties:
     *
     * @returns string[]
     */
    allowedProps(): string[];
    /**
     * Prepares auto close feature
     * @returns Alert
     */
    autoClose(): Alert;
    /**
     * Reset alerts so they aren't displayed
     * @returns Alert
     */
    convertContents(text: string): Alert;
    /**
     * Hide alert
     * @returns Alert
     */
    hide(): Alert;
    /**
     * Reset alerts so they aren't displayed
     * @returns Alert
     */
    reset(): Alert;
    /**
     * Show alert
     * @returns Alert
     */
    show(): Alert;
}
//# sourceMappingURL=Alert.d.ts.map