import { TextField, ColorPicker } from "#/classes/fields";
import { Menu } from "#/classes/elements";
import { FieldType } from "#/types/FieldType";
declare const _default: import("vue").DefineComponent<{
    menu: {
        type: import("vue").PropType<Menu>;
        required: true;
    };
    picker: {
        type: import("vue").PropType<ColorPicker>;
        required: true;
    };
    textfield: {
        type: import("vue").PropType<TextField>;
        required: true;
    };
    fields: {
        type: import("vue").PropType<FieldType[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validated: (value: string) => void;
    invalidated: (value: string) => void;
    "update:modelValue": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menu: {
        type: import("vue").PropType<Menu>;
        required: true;
    };
    picker: {
        type: import("vue").PropType<ColorPicker>;
        required: true;
    };
    textfield: {
        type: import("vue").PropType<TextField>;
        required: true;
    };
    fields: {
        type: import("vue").PropType<FieldType[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (value: any) => any;
    onValidated?: (value: string) => any;
    onInvalidated?: (value: string) => any;
}, {
    modelValue: string;
}, {}>;
export default _default;
//# sourceMappingURL=EasyColorPicker.vue.d.ts.map