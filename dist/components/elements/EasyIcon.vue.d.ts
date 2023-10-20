import { Icon } from "#/classes/elements";
declare const _default: import("vue").DefineComponent<{
    icon: {
        type: import("vue").PropType<Icon>;
        required: true;
    };
    identifier: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: string | number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: import("vue").PropType<Icon>;
        required: true;
    };
    identifier: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>> & {
    onClick?: (value: string | number) => any;
}, {
    identifier: string | number;
}, {}>;
export default _default;
//# sourceMappingURL=EasyIcon.vue.d.ts.map