import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { FilterModeTypes } from "../../enums";
import { Icon } from "../elements";

export class AutoCompleteField extends EasyField {
  auto_select_first: boolean | "exact" = false;
  chips = false;
  closable_chips = false;
  close_text = "$vuetify.close";
  component = "v-autocomplete";
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

  constructor(init?: Partial<AutoCompleteField>) {
    super(init);
    Object.assign(this, init);
    this.discriminator = "AutoCompleteField";
  }

  /**
   * Returns an array of all allowed props that are present on V-Autocomplete
   * https://vuetifyjs.com/en/api/v-autocomplete/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "active",
      "append_icon",
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
      "prepend_icon",
      "prepend_inner_icon",
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
      "value",
      "validate_on",
      "variant",
    ];
  }

  loadItems(items: any): this {
    this.items = items;
    return this;
  }
}
