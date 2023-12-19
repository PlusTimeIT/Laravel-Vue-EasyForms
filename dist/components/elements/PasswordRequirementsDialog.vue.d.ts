declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    lowerCase?: boolean | undefined;
    minLength?: number | boolean | undefined;
    numbers?: boolean | undefined;
    special?: boolean | undefined;
    upperCase?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    lowerCase?: boolean | undefined;
    minLength?: number | boolean | undefined;
    numbers?: boolean | undefined;
    special?: boolean | undefined;
    upperCase?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
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
//# sourceMappingURL=PasswordRequirementsDialog.vue.d.ts.map