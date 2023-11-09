import type { FieldType } from "../../types";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    field: FieldType;
    fields: FieldType[];
    cols?: number;
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
    cols?: number;
}>>> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onUpdated?: (...args: any[]) => any;
    onValidated?: (...args: any[]) => any;
    onInvalidated?: (...args: any[]) => any;
    "onClick:prepend"?: (...args: any[]) => any;
    "onClick:append"?: (...args: any[]) => any;
    "onClick:clear"?: (...args: any[]) => any;
    "onClick:prependInner"?: (...args: any[]) => any;
    "onClick:appendInner"?: (...args: any[]) => any;
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