import { GotProps } from "../../abstracts/GotProps";
import { isEmpty } from "../../utils";

export class ProgressCircular extends GotProps {
  class: string | undefined;
  bg_color: string | undefined = "white";
  color: string | undefined;
  indeterminate: string | boolean = false;
  rotate: string | number = 0;
  size: string | number = "default";
  tag: string | undefined = "div";
  theme: string | undefined;
  width: string | undefined;

  constructor(init?: Partial<ProgressCircular>) {
    super(init);

    Object.assign(this, init);

    if (isEmpty(this.class)) {
      this.class = "mx-auto my-auto text-center pa-10";
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
    return ["bg_color", "color", "indeterminate", "rotate", "size", "tag", "theme", "width"];
  }
}
