import type HasField from "../contracts/HasField";
import { ValidationRule } from "../classes/properties";
import { Icon, Tooltip } from "../classes/elements";
import { DensityTypes, ValidationTriggers, TextVariantTypes } from "../enums";
import { GotProps } from "./GotProps";
import type { FieldType } from "../types";
import type { ActionForm, InputForm } from "../forms";
/**
 * Abstract class representing an EasyField, which is a base class for form fields.
 * @abstract
 * @class
 * @extends GotProps
 * @implements HasField
 */
export declare abstract class EasyField extends GotProps implements HasField {
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
    density: DensityTypes;
    depends_on: string;
    disabled: boolean;
    discriminator: string;
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
    model_value: any;
    name: string;
    offset: string | number;
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
    /**
     * Creates an instance of EasyField.
     * @param {Partial<EasyField>} [init] - Initialization object for setting properties.
     */
    constructor(init?: Partial<EasyField>);
    addErrorMessage(message: string): this;
    clearErrorMessages(): this;
    /**
     * Invalidate the field's validation state.
     * @returns {this} The EasyField instance for method chaining.
     */
    invalidate(): this;
    /**
     * Set the loading state of the field.
     * @param {boolean} loading - Whether the field is in a loading state.
     * @returns {this} The EasyField instance for method chaining.
     */
    isLoading(loading: boolean): this;
    /**
     * Check if the parent field is loaded.
     * @param {EasyField} parent_field - The parent field to check against.
     * @returns {boolean} True if the parent field is loaded; otherwise, false.
     */
    isParentPopulated(parent_field: EasyField | undefined): boolean;
    /**
     * Check if the field should be shown due to parent.
     * @param {EasyField} parent_field - The parent field to check against.
     * @returns {boolean} True if the parent fields value is correct; otherwise, false.
     */
    showIfParent(parent_field: EasyField | undefined): boolean;
    /**
     * Load data for the field asynchronously.
     * @param {InputForm | ActionForm} form form its loading from.
     * @param {EasyField} parent - The parent field for additional data.
     * @returns {Promise<object|boolean>} A Promise that resolves to the loaded data or false if loading fails.
     */
    load(form: InputForm | ActionForm, parent: EasyField): Promise<object | boolean>;
    /**
     * Validate the field.
     * @returns {this} The EasyField instance for method chaining.
     */
    validate(): this;
    /**
     * Validate the field.
     * @returns {this} The EasyField instance for method chaining.
     */
    findValidation(name: string): ValidationRule | undefined;
    /**
     * Apply validation rules to the field.
     * @param {FieldType[]} [fields] - An optional array of fields to use in validation.
     * @returns {any[]} An array of validation results.
     */
    validationRules(fields?: FieldType[]): Array<any>;
    buildValidation(fields: FieldType[], rule: ValidationRule): Array<any>;
}
//# sourceMappingURL=EasyField.d.ts.map