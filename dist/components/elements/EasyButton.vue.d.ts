import { Button } from "#/classes/elements";
declare const _default: import("vue").DefineComponent<{
    button: {
        type: import("vue").PropType<Button>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    identifier: {
        type: import("vue").PropType<string | number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: string | number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    button: {
        type: import("vue").PropType<Button>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    identifier: {
        type: import("vue").PropType<string | number>;
    };
}>> & {
    onClick?: (value: string | number) => any;
}, {}, {}>;
export default _default;
//# sourceMappingURL=EasyButton.vue.d.ts.map