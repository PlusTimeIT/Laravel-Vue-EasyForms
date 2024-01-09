import { TimePickerModeTypes } from "../../enums";
interface Props {
    modelValue: string | undefined;
    padStart: boolean;
    mode: TimePickerModeTypes;
    rollingNumbers: boolean;
    width?: string | number | undefined;
    cancelText?: string | undefined;
    okText?: string | undefined;
    title?: string | undefined;
    closeOnOutsideClick?: boolean | undefined;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    modelValue: string;
    padStart: boolean;
    rollingNumbers: boolean;
    mode: TimePickerModeTypes;
    width: number;
    cancelText: string;
    okText: string;
    title: string;
    closeOnOutsideClick: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
    "click:cancel": (value: string | undefined) => void;
    "click:save": (value: string | undefined) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    modelValue: string;
    padStart: boolean;
    rollingNumbers: boolean;
    mode: TimePickerModeTypes;
    width: number;
    cancelText: string;
    okText: string;
    title: string;
    closeOnOutsideClick: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onClick:save"?: ((value: string | undefined) => any) | undefined;
    "onClick:cancel"?: ((value: string | undefined) => any) | undefined;
}, {
    width: string | number;
    title: string;
    mode: TimePickerModeTypes;
    modelValue: string | undefined;
    padStart: boolean;
    rollingNumbers: boolean;
    cancelText: string;
    okText: string;
    closeOnOutsideClick: boolean;
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
//# sourceMappingURL=TempTimePicker.vue.d.ts.map