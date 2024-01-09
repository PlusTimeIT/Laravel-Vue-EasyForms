import type { FieldType } from "../../types";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    field: {
        type: PropType<FieldType>;
        required: true;
    };
    fields: {
        type: PropType<FieldType[]>;
        required: true;
    };
    cols: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    updated: (...args: any[]) => void;
    validated: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    invalidated: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "click:clear": (...args: any[]) => void;
    "click:prepend": (...args: any[]) => void;
    "click:prependInner": (...args: any[]) => void;
    "click:append": (...args: any[]) => void;
    "click:appendInner": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    field: {
        type: PropType<FieldType>;
        required: true;
    };
    fields: {
        type: PropType<FieldType[]>;
        required: true;
    };
    cols: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onValidated?: ((...args: any[]) => any) | undefined;
    onInvalidated?: ((...args: any[]) => any) | undefined;
    "onClick:prepend"?: ((...args: any[]) => any) | undefined;
    "onClick:append"?: ((...args: any[]) => any) | undefined;
    onUpdated?: ((...args: any[]) => any) | undefined;
    "onClick:clear"?: ((...args: any[]) => any) | undefined;
    "onClick:prependInner"?: ((...args: any[]) => any) | undefined;
    "onClick:appendInner"?: ((...args: any[]) => any) | undefined;
}, {
    cols: number;
}, {}>;
export default _default;
//# sourceMappingURL=EasyInput.vue.d.ts.map