import { Button } from "../../classes/elements";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    button: Button;
    disabled: boolean;
    identifier?: string | number | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: string | number | undefined) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    button: Button;
    disabled: boolean;
    identifier?: string | number | undefined;
}>>> & {
    onClick?: ((value: string | number | undefined) => any) | undefined;
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
//# sourceMappingURL=EasyButton.vue.d.ts.map