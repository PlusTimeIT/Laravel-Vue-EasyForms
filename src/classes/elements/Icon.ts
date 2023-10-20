import { Tooltip } from "#/classes/elements";
import { GotProps } from "#/abstracts/GotProps";
import HasIcon from "#/contracts/HasIcon";

export class Icon extends GotProps implements HasIcon {
  class: string | undefined;
  color = "primary";
  icon = "";
  size: string | undefined;
  tooltip: Tooltip | undefined;

  constructor(init?: Partial<Icon>) {
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
    return ["class", "color", "end", "icon", "size", "start", "tag", "theme"];
  }
}
