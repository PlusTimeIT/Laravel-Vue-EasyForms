import { TextField } from "../../classes/fields";
import type { FieldType } from "../../types";
interface Props {
    fields: FieldType[];
    lowerCase?: boolean;
    minLength?: boolean | number;
    numbers?: boolean;
    special?: boolean;
    upperCase?: boolean;
    modelValue: string | undefined;
    showRequirementsDialog?: boolean;
    showStrengthBar?: boolean;
    strengthErrorColor?: string;
    strengthErrorText?: string;
    strengthSuccessColor?: string;
    strengthSuccessText?: string;
    strengthWarningColor?: string;
    strengthWarningText?: string;
    errorMessages?: string[] | undefined;
    textfield: TextField;
    viewMode?: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    modelValue: string;
    showStrengthBar: boolean;
    viewMode: boolean;
    showRequirementsDialog: boolean;
    strengthErrorColor: string;
    strengthWarningColor: string;
    strengthSuccessColor: string;
    strengthErrorText: string;
    strengthWarningText: string;
    strengthSuccessText: string;
    errorMessages: () => never[];
    lowerCase: boolean;
    upperCase: boolean;
    numbers: boolean;
    special: boolean;
    minLength: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validated: (value: string | undefined) => void;
    invalidated: (value: string | undefined) => void;
    "update:modelValue": (value: any) => void;
    "click:prepend": (value: any) => void;
    "click:prependInner": (value: any) => void;
    "click:append": (value: any) => void;
    "click:appendInner": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    modelValue: string;
    showStrengthBar: boolean;
    viewMode: boolean;
    showRequirementsDialog: boolean;
    strengthErrorColor: string;
    strengthWarningColor: string;
    strengthSuccessColor: string;
    strengthErrorText: string;
    strengthWarningText: string;
    strengthSuccessText: string;
    errorMessages: () => never[];
    lowerCase: boolean;
    upperCase: boolean;
    numbers: boolean;
    special: boolean;
    minLength: number;
}>>> & {
    onValidated?: ((value: string | undefined) => any) | undefined;
    onInvalidated?: ((value: string | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onClick:prepend"?: ((value: any) => any) | undefined;
    "onClick:append"?: ((value: any) => any) | undefined;
    "onClick:prependInner"?: ((value: any) => any) | undefined;
    "onClick:appendInner"?: ((value: any) => any) | undefined;
}, {
    numbers: boolean;
    special: boolean;
    modelValue: string | undefined;
    errorMessages: string[];
    viewMode: boolean;
    lowerCase: boolean;
    minLength: number | boolean;
    upperCase: boolean;
    showRequirementsDialog: boolean;
    showStrengthBar: boolean;
    strengthErrorColor: string;
    strengthErrorText: string;
    strengthSuccessColor: string;
    strengthSuccessText: string;
    strengthWarningColor: string;
    strengthWarningText: string;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=EasyPassword.vue.d.ts.map