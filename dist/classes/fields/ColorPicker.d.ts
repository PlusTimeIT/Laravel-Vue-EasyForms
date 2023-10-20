import { EasyField } from "../../abstracts/EasyField";
import { ColorPickerModeTypes } from "../../enums";
import { PositionTypes } from "../../enums";
interface HSVA {
    readonly a?: number;
    readonly h: number;
    readonly s: number;
    readonly v: number;
}
interface RGBA {
    readonly a?: number;
    readonly b: number;
    readonly g: number;
    readonly r: number;
}
interface HSLA {
    readonly a?: number;
    readonly h: number;
    readonly l: number;
    readonly s: number;
}
export declare class ColorPicker extends EasyField {
    border: string | number | boolean;
    canvas_height: string | number;
    dot_size: string | number;
    elevation: string | number | undefined;
    hide_canvas: boolean;
    hide_inputs: boolean;
    hide_sliders: boolean;
    mode: ColorPickerModeTypes;
    modes: ColorPickerModeTypes[];
    position: PositionTypes | undefined;
    rounded: string | number | boolean;
    show_swatches: boolean;
    swatches: string | number | HSVA | RGBA | HSLA | undefined;
    swatches_max_height: string | number;
    tag: string;
    width: string | number;
    constructor(init?: Partial<ColorPicker>);
    allowedProps(): string[];
}
export {};
//# sourceMappingURL=ColorPicker.d.ts.map