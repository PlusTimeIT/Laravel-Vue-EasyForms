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
    "click:cancel": (value: string) => void;
    "click:save": (value: string) => void;
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
    "onUpdate:modelValue"?: (value: any) => any;
    "onClick:save"?: (value: string) => any;
    "onClick:cancel"?: (value: string) => any;
}, {
    width: string | number;
    title: string;
    mode: TimePickerModeTypes;
    modelValue: string;
    padStart: boolean;
    cancelText: string;
    okText: string;
    rollingNumbers: boolean;
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