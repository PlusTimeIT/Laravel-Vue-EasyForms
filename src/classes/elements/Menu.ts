import { LocationTypes } from "../../enums";
import { ScrollStrategyTypes } from "../../enums";
import { GotProps } from "../../abstracts/GotProps";

export class Menu extends GotProps {
  activator: string | undefined;
  attach: string | boolean = false;
  close_delay: string | number = 250;
  close_on_back = true;
  close_on_content_click = false;
  contained = false;
  content_class: any;
  content_props: any;
  disabled = false;
  eager = false;
  height: string | number | undefined;
  location: LocationTypes = LocationTypes.Bottom;
  max_height: string | number | undefined;
  max_width: string | number | undefined;
  min_height: string | number | undefined;
  min_width: string | number | undefined = 0;
  no_click_animation = false;
  open_delay: string | number = 1;
  open_on_click = true;
  open_on_focus = false;
  open_on_hover = false;
  persistent: string | boolean = false;
  scrim: string | boolean = false;
  scroll_strategy: ScrollStrategyTypes = ScrollStrategyTypes.Reposition;
  width: string | number | undefined;
  z_index: string | number | undefined = 2000;

  constructor(init?: Partial<Menu>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props that are present on V-Menu
   * https://vuetifyjs.com/en/api/v-menu/
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
      "persistent",
      "scrim",
      "scroll_strategy",
      "theme",
      "transition",
      "width",
      "z_index",
    ];
  }
}
