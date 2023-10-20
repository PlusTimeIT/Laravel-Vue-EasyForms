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

export class ColorPicker extends EasyField {
  border: string | number | boolean = false;
  canvas_height: string | number = 150;
  dot_size: string | number = 10;
  elevation: string | number | undefined;
  hide_canvas = false;
  hide_inputs = false;
  hide_sliders = false;
  mode: ColorPickerModeTypes = ColorPickerModeTypes.Hex;
  modes: ColorPickerModeTypes[] = [
    ColorPickerModeTypes.Hex,
    ColorPickerModeTypes.Hexa,
    ColorPickerModeTypes.Hsl,
    ColorPickerModeTypes.Hsla,
    ColorPickerModeTypes.Rgb,
    ColorPickerModeTypes.Rgba,
  ];
  position: PositionTypes | undefined;
  rounded: string | number | boolean = false;
  show_swatches = false;
  swatches: string | number | HSVA | RGBA | HSLA | undefined;
  swatches_max_height: string | number = 150;
  tag = "div";
  width: string | number = "300";

  constructor(init?: Partial<ColorPicker>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "border",
      "canvas_height",
      "color",
      "disabled",
      "dot_size",
      "elevation",
      "hide_canvas",
      "hide_inputs",
      "hide_sliders",
      "mode",
      "modes",
      "position",
      "rounded",
      "show_swatches",
      "swatches",
      "swatches_max_height",
      "tag",
      "theme",
      // 'width'
    ];
  }
}
