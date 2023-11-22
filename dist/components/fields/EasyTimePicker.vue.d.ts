import { TextField, TimePicker } from "../../classes/fields";
import { Menu } from "../../classes/elements";
import type { FieldType } from "../../types";
interface Props {
    menu: Menu;
    modelValue: string | undefined;
    picker: TimePicker;
    textfield: TextField;
    fields: FieldType[];
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    modelValue: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validated: (value: string | undefined) => void;
    invalidated: (value: string | undefined) => void;
    "update:modelValue": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    modelValue: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onValidated?: ((value: string | undefined) => any) | undefined;
    onInvalidated?: ((value: string | undefined) => any) | undefined;
}, {
    modelValue: string | undefined;
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
//# sourceMappingURL=EasyTimePicker.vue.d.ts.map