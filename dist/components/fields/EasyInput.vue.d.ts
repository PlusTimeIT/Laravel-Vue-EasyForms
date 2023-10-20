import type { FieldType } from "#/types";
declare const _default: import("vue").DefineComponent<{
    field: {
        type: import("vue").PropType<FieldType>;
        required: true;
    };
    fields: {
        type: import("vue").PropType<FieldType[]>;
        required: true;
    };
    cols: {
        type: import("vue").PropType<number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    updated: (...args: any[]) => void;
    validated: (...args: any[]) => void;
    invalidated: (...args: any[]) => void;
    "click:clear": (...args: any[]) => void;
    "click:prepend": (...args: any[]) => void;
    "click:prependInner": (...args: any[]) => void;
    "click:append": (...args: any[]) => void;
    "click:appendInner": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    field: {
        type: import("vue").PropType<FieldType>;
        required: true;
    };
    fields: {
        type: import("vue").PropType<FieldType[]>;
        required: true;
    };
    cols: {
        type: import("vue").PropType<number>;
    };
}>> & {
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
//# sourceMappingURL=EasyInput.vue.d.ts.map