import { isEmpty } from "../../composables/utils/Types";
import { LocationTypes } from "../../enums";
import { GotProps } from "../../abstracts/GotProps";

export class Tooltip extends GotProps {
  activator: string | undefined;
  attach: string | boolean = false;
  close_delay: string | number | undefined;
  close_on_back = false;
  close_on_content_click = false;
  contained = false;
  content_class: any;
  content_props: any;
  disabled = false;
  eager = true;
  height: string | number | undefined;
  location: LocationTypes = LocationTypes.Top;
  max_height: string | number | undefined;
  max_width: string | number | undefined;
  min_height: string | number | undefined;
  min_width: string | number | undefined = 0;
  model_value = false;
  no_click_animation = false;
  offset: string | number | number[] = 10;
  open_delay: string | number | undefined;
  open_on_click = false;
  open_on_focus = false;
  open_on_hover = true;
  scrim: string | boolean = false;
  text: string | undefined;
  theme: string | undefined;
  transition: string | boolean = false;
  width: string | number | undefined;
  z_index: string | number | undefined = 2000;

  constructor(init?: Partial<Tooltip>) {
    super(init);
    Object.assign(this, init);
    if (isEmpty(this.text)) {
      // tooltip is loaded empty
      this.open_on_click = false;
      this.open_on_focus = false;
      this.open_on_hover = false;
      this.disabled = true;
    }
  }

  /**
   * Returns an array of all allowed props that are present on V-Tooltip
   * https://vuetifyjs.com/en/api/v-tooltip/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      // 'activator',
      "attach",
      "close_delay",
      "close_on_back",
      "close_on_content_click",
      "contained",
      "content_class",
      "content_props",
      "disabled",
      "eager",
      "height",
      "id",
      "location",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "model_value",
      "no_click_animation",
      "offset",
      "open_delay",
      "open_on_click",
      "open_on_focus",
      "open_on_hover",
      "scrim",
      "text",
      "theme",
      "transition",
      "width",
      "z_index",
    ];
  }
}
