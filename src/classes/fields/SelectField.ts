import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { FilterModeTypes } from "../../enums";
import { Icon } from "../elements";

export class SelectField extends EasyField {
  auto_select_first: boolean | "exact" = false;
  chips = false;
  closable_chips = false;
  close_text = "$vuetify.close";
  component = "v-select";
  counter: string | number | boolean = false;
  direction: DirectionType = DirectionType.Horizontal;
  filter_keys: string | string[] = ["title"];
  filter_mode: FilterModeTypes = FilterModeTypes.Intersection;
  hide_no_data = false;
  hide_selected = false;
  item_children: string | boolean = false;
  item_color: string | undefined;
  item_props: string | boolean = "props";
  item_title = "title";
  item_value = "value";
  items: any[] = [];
  menu = false;
  menu_icon = "$dropdown";
  multiple = false;
  no_data_text = "$vuetify.noDataText";
  no_filter = false;
  open_on_clear = false;
  open_text = "$vuetify.open";
  prepend_inner_icon: Icon | undefined;
  return_object = false;
  search = "";
  transition: string | boolean = false;
  type = "text";

  constructor(init?: Partial<SelectField>) {
    super(init);
    Object.assign(this, init);

    this.discriminator = "SelectField";
  }

  loadItems(items: any): this {
    this.items = items;
    return this;
  }

  /**
   * Returns an array of all allowed props that are present on V-Select
   * https://vuetifyjs.com/en/api/v-select/
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
      "autofocus",
      "auto_select_first",
      "base_color",
      "bg_color",
      "center_affix",
      "chips",
      "clearable",
      "clear_icon",
      "closable_chips",
      "close_text",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "disabled",
      "eager",
      "error",
      "error_messages",
      "filter_keys",
      "filter_mode",
      "flat",
      "focused",
      "hide_details",
      "hide_no_data",
      "hide_selected",
      "hint",
      "id",
      "item_children",
      "item_color",
      "item_props",
      "items",
      "item_title",
      "item_value",
      "label",
      "loading",
      "max_errors",
      "menu",
      "messages",
      // "model_value",
      "multiple",
      "name",
      "no_data_text",
      "no_filter",
      "open_on_clear",
      "open_text",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "return_object",
      "reverse",
      "role",
      "rounded",
      "rules",
      "search",
      "single_line",
      "suffix",
      "theme",
      "transition",
      "type",
      // "value",
      "validate_on",
      "variant",
    ];
  }
}
