import { Tooltip } from "./Tooltip";
import { GotProps } from "../../abstracts/GotProps";
import { isEmpty } from "../../composables/utils";
import HasIcon from "../../contracts/HasIcon";

export class Icon extends GotProps implements HasIcon {
  classes: string | undefined;
  color = "primary";
  end = false;
  icon = "";
  size: string | undefined;
  start = false;
  tooltip: Tooltip | undefined;
  tag = "i";

  constructor(init?: Partial<Icon>) {
    super(init);

    if (!isEmpty(init?.tooltip)) {
      if (init?.tooltip instanceof Tooltip) {
        this.tooltip = init?.tooltip;
      } else {
        this.tooltip = new Tooltip(init?.tooltip);
      }
      delete init?.tooltip;
    }

    Object.assign(this, init);

    if (isEmpty(this.tooltip)) {
      this.tooltip = new Tooltip({ disabled: true });
    }
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
    return ["classes", "color", "end", "icon", "size", "start", "tag", "theme"];
  }
}
