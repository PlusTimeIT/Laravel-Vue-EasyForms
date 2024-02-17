import { EasyField } from "../../abstracts/EasyField";
import { PositionTypes } from "../../enums";
import { TimePickerModeTypes } from "../../enums";
export declare class TimePicker extends EasyField {
    cancel_text: string;
    close_on_outside_click: boolean;
    elevation: string | number | undefined;
    header: string;
    height: string | number | undefined;
    hide_actions: boolean;
    mode: TimePickerModeTypes;
    ok_text: string;
    pad_start: boolean;
    position: PositionTypes | undefined;
    rolling_numbers: boolean;
    tag: string;
    title: string;
    width: string | number | undefined;
    constructor(init?: Partial<TimePicker>);
    /**
     * Returns an array of all allowed props that are present on V-Color-Picker
     * https://vuetifyjs.com/en/api/v-color-picker/
     *
     * Currently missing the following properties:
     *
     * @returns string[]
     */
    allowedProps(): string[];
}
//# sourceMappingURL=TimePicker.d.ts.map