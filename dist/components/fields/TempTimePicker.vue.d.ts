import { TimePickerModeTypes } from "../../enums";
declare const _default: import("vue").DefineComponent<{
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<TimePickerModeTypes>;
        required: true;
        default: TimePickerModeTypes;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    padStart: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    cancelText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    okText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    rollingNumbers: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    closeOnOutsideClick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
    "click:cancel": (value: string) => void;
    "click:save": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<TimePickerModeTypes>;
        required: true;
        default: TimePickerModeTypes;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    padStart: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    cancelText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    okText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    rollingNumbers: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    closeOnOutsideClick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
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
//# sourceMappingURL=TempTimePicker.vue.d.ts.map