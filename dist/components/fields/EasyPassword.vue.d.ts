import { TextField } from "../../classes/fields";
import type { FieldType } from "../../types";
declare const _default: import("vue").DefineComponent<{
    textfield: {
        type: import("vue").PropType<TextField>;
        required: true;
    };
    numbers: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    special: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
    errorMessages: {
        type: import("vue").PropType<string[]>;
        default: () => any[];
    };
    viewMode: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    lowerCase: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    minLength: {
        type: import("vue").PropType<number | boolean>;
        default: number;
    };
    upperCase: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showStrengthBar: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    strengthErrorColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthErrorText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthSuccessColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthSuccessText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthWarningColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthWarningText: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validated: (value: string) => void;
    invalidated: (value: string) => void;
    "update:modelValue": (value: any) => void;
    "click:prepend": (value: any) => void;
    "click:prependInner": (value: any) => void;
    "click:append": (value: any) => void;
    "click:appendInner": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    textfield: {
        type: import("vue").PropType<TextField>;
        required: true;
    };
    numbers: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    special: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
    errorMessages: {
        type: import("vue").PropType<string[]>;
        default: () => any[];
    };
    viewMode: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    lowerCase: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    minLength: {
        type: import("vue").PropType<number | boolean>;
        default: number;
    };
    upperCase: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showStrengthBar: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    strengthErrorColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthErrorText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthSuccessColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthSuccessText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthWarningColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    strengthWarningText: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (value: any) => any;
    onValidated?: (value: string) => any;
    onInvalidated?: (value: string) => any;
    "onClick:prepend"?: (value: any) => any;
    "onClick:append"?: (value: any) => any;
    "onClick:prependInner"?: (value: any) => any;
    "onClick:appendInner"?: (value: any) => any;
}, {
    numbers: boolean;
    special: boolean;
    modelValue: string;
    errorMessages: string[];
    viewMode: boolean;
    lowerCase: boolean;
    minLength: number | boolean;
    upperCase: boolean;
    showStrengthBar: boolean;
    strengthErrorColor: string;
    strengthErrorText: string;
    strengthSuccessColor: string;
    strengthSuccessText: string;
    strengthWarningColor: string;
    strengthWarningText: string;
}, {}>;
export default _default;
//# sourceMappingURL=EasyPassword.vue.d.ts.map