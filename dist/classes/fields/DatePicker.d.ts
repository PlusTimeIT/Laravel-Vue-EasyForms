import { EasyField } from "../../abstracts/EasyField";
import { PositionTypes } from "../../enums";
import { Icon } from "../elements";
import { InputModeTypes } from "../../enums";
import { ViewModeTypes } from "../../enums";
export declare class DatePicker extends EasyField {
    border: string | number | boolean;
    calendar_icon: Icon | string;
    cancel_text: string;
    collapse_icon: Icon | string;
    display_date: any;
    elevation: string | number | undefined;
    expand_icon: Icon | string;
    format: string | undefined;
    header: string;
    height: string | number | undefined;
    hide_actions: boolean;
    hide_weekdays: boolean;
    hover_date: any;
    input_mode: InputModeTypes;
    input_placeholder: string;
    input_text: string;
    keyboard_icon: Icon | string;
    landscape: boolean;
    max: string | number | Date | undefined;
    max_height: string | number | undefined;
    max_width: string | number | undefined;
    min: string | number | Date | undefined;
    min_height: string | number | undefined;
    min_width: string | number | undefined;
    multiple: boolean;
    next_icon: Icon | string;
    ok_text: string;
    position: PositionTypes | undefined;
    prev_icon: Icon | string;
    rounded: boolean;
    show_adjacent_months: boolean;
    show_week: boolean;
    side: string | undefined;
    tag: string;
    title: string;
    view_mode: ViewModeTypes;
    width: string | number | undefined;
    constructor(init?: Partial<DatePicker>);
    /**
     * Returns an array of all allowed props that are present on V-Date-Picker
     * https://vuetifyjs.com/en/api/v-date-picker/
     *
     * Currently missing the following properties:
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=DatePicker.d.ts.map