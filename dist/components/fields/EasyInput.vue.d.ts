import type { FieldType } from "../../types";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    field: FieldType;
    fields: FieldType[];
    cols?: number | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    updated: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    validated: (...args: any[]) => void;
    invalidated: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "click:clear": (...args: any[]) => void;
    "click:prepend": (...args: any[]) => void;
    "click:prependInner": (...args: any[]) => void;
    "click:append": (...args: any[]) => void;
    "click:appendInner": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    field: FieldType;
    fields: FieldType[];
    cols?: number | undefined;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onUpdated?: ((...args: any[]) => any) | undefined;
    onValidated?: ((...args: any[]) => any) | undefined;
    onInvalidated?: ((...args: any[]) => any) | undefined;
    "onClick:prepend"?: ((...args: any[]) => any) | undefined;
    "onClick:append"?: ((...args: any[]) => any) | undefined;
    "onClick:clear"?: ((...args: any[]) => any) | undefined;
    "onClick:prependInner"?: ((...args: any[]) => any) | undefined;
    "onClick:appendInner"?: ((...args: any[]) => any) | undefined;
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
//# sourceMappingURL=EasyInput.vue.d.ts.map