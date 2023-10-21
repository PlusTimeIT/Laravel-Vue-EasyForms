import { Tooltip, Icon } from ".";
import { ButtonTypes } from "../../enums";
import { DensityTypes } from "../../enums";
import { PositionTypes } from "../../enums";
import { ButtonVariantTypes } from "../../enums";
import { GotProps } from "../../abstracts/GotProps";

export class Button extends GotProps {
  active = false;
  append_icon: Icon | undefined;
  block = false;
  border: string | number | boolean = false;
  class = "";
  color = "primary";
  density: DensityTypes = DensityTypes.Default;
  disabled = false;
  elevation: string | number = 0;
  exact = false;
  flat = false;
  height: string | number | undefined;
  href: string | undefined;
  icon: Icon | undefined;
  loading = false;
  max_height: string | number | undefined;
  max_width: string | number | undefined;
  min_height: string | number | undefined;
  min_width: string | number | undefined = 0;
  order = 0;
  position: PositionTypes | undefined;
  prepend_icon: Icon | undefined;
  replace = false;
  rounded: string | number | boolean = false;
  selected_class: string | undefined;
  size: string | number = "default";
  stacked = false;
  symbol: any;
  tag = "button";
  text: string | undefined;
  theme: string | undefined;
  to: unknown | undefined;
  tooltip: Tooltip | undefined;
  type: ButtonTypes = ButtonTypes.Process;
  value: any | undefined;
  variant: ButtonVariantTypes = ButtonVariantTypes.Elevated;
  width: string | number | undefined;

  constructor(init?: Partial<Button>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Btn
   * https://vuetifyjs.com/en/api/v-btn/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      "block",
      "border",
      "class",
      "color",
      "density",
      "disabled",
      "elevation",
      "exact",
      "flat",
      "height",
      "href",
      "icon",
      "loading",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "position",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "replace",
      "rounded",
      "selected_class",
      "size",
      "stacked",
      "symbol",
      "tag",
      "text",
      "theme",
      "to",
      "value",
      "variant",
      "width",
    ];
  }
}
