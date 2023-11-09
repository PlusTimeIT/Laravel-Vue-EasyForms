import { EasyField } from "../../abstracts/EasyField";
import { DirectionType } from "../../enums";
import { FilterModeTypes } from "../../enums";
import { Icon } from "../elements";
export declare class SelectField extends EasyField {
    auto_select_first: boolean | "exact";
    chips: boolean;
    closable_chips: boolean;
    close_text: string;
    component: string;
    counter: string | number | boolean;
    direction: DirectionType;
    filter_keys: string | string[];
    filter_mode: FilterModeTypes;
    hide_no_data: boolean;
    hide_selected: boolean;
    item_children: string | boolean;
    item_color: string | undefined;
    item_props: string | boolean;
    item_title: string;
    item_value: string;
    items: any[];
    menu: boolean;
    menu_icon: string;
    multiple: boolean;
    no_data_text: string;
    no_filter: boolean;
    open_on_clear: boolean;
    open_text: string;
    prepend_inner_icon: Icon | undefined;
    return_object: boolean;
    search: string;
    transition: string | boolean;
    type: string;
    constructor(init?: Partial<SelectField>);
    loadItems(items: any): this;
    allowedProps(): string[];
}
//# sourceMappingURL=SelectField.d.ts.map