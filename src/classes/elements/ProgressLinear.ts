import { Tooltip } from "./Tooltip";
import { GotProps } from "../../abstracts/GotProps";
import { LocationTypes } from "../../enums";

export class ProgressLinear extends GotProps {
  classes: string | undefined;
  absolute = false;
  active = false;
  bg_color: string | undefined = "primary";
  bg_opacity: string | number | undefined;
  color: string | undefined;
  height: string | number | undefined;
  indeterminate: string | boolean = false;
  location: LocationTypes = LocationTypes.Top;
  reverse = false;
  rounded = false;
  rounded_bar = false;
  stream = false;
  striped = false;
  tag: string | undefined = "div";
  theme: Tooltip | undefined;

  constructor(init?: Partial<ProgressLinear>) {
    super(init);

    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Icon
   * https://vuetifyjs.com/en/api/v-icon/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "absolute",
      "active",
      "bg_color",
      "color",
      "height",
      "indeterminate",
      "location",
      "reverse",
      "rounded",
      "rounded_bar",
      "stream",
      "striped",
      "tag",
      "theme",
    ];
  }
}
