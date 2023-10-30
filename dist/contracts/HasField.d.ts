import { Tooltip, Icon } from "../classes/elements";
import { ValidationRule } from "../classes/properties/ValidationRule";
import { DensityTypes } from "../enums";
import { ValidationTriggers } from "../enums";
import { TextVariantTypes } from "../enums";
export default interface HasField {
    active: boolean;
    append_icon: Icon | undefined;
    autofocus: boolean;
    base_color: string | undefined;
    bg_color: string | undefined;
    center_affix: boolean;
    clear_icon: Icon | undefined;
    clearable: boolean;
    color: string | undefined;
    cols: number;
    component: string;
    component_type: string | undefined;
    discriminator: string;
    density: DensityTypes;
    depends_on: string;
    disabled: boolean;
    eager: boolean;
    error: boolean;
    error_messages: string | string[];
    flat: boolean;
    focused: boolean;
    help: string;
    hide_details: boolean | "auto";
    hint: string | undefined;
    id: string | undefined;
    label: string;
    loading: boolean;
    max_errors: string | number;
    messages: string | string[];
    name: string;
    order: number;
    outlined: boolean;
    parent_loaded: boolean;
    persistent_clear: boolean;
    persistent_counter: boolean;
    persistent_hint: boolean;
    persistent_placeholder: boolean;
    placeholder: string;
    prefix: string | undefined;
    prepend_icon: Icon | undefined;
    readonly: boolean;
    require_confirmation: boolean;
    required: boolean;
    role: string | undefined;
    rounded: string | number | boolean;
    rules: ValidationRule[];
    show_if: boolean;
    show_if_parent: string;
    show_if_value: any;
    single_line: boolean;
    suffix: string | undefined;
    theme: string | undefined;
    tooltip: Tooltip | undefined;
    type: string;
    validate_on: ValidationTriggers | undefined;
    validated: boolean;
    value: any;
    variant: TextVariantTypes;
}
//# sourceMappingURL=HasField.d.ts.map