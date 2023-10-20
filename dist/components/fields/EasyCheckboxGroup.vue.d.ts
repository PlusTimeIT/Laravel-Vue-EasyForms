import { CheckboxField, SwitchField } from "#/classes/fields";
declare const _default: import("vue").DefineComponent<{
    class: {
        type: import("vue").PropType<string>;
        default: string;
    };
    cols: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    items: {
        type: import("vue").PropType<CheckboxField[]>;
        required: true;
    };
    switch: {
        type: import("vue").PropType<SwitchField>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validated: (value: string) => void;
    invalidated: (value: string) => void;
    "update:modelValue": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: import("vue").PropType<string>;
        default: string;
    };
    cols: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    items: {
        type: import("vue").PropType<CheckboxField[]>;
        required: true;
    };
    switch: {
        type: import("vue").PropType<SwitchField>;
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (value: any) => any;
    onValidated?: (value: string) => any;
    onInvalidated?: (value: string) => any;
}, {
    class: string;
    cols: string | number;
    label: string;
    switch: SwitchField;
}, {}>;
export default _default;
//# sourceMappingURL=EasyCheckboxGroup.vue.d.ts.map