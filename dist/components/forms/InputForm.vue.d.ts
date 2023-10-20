import { InputForm } from "../../classes/forms";
declare const _default: import("vue").DefineComponent<{
    form: {
        type: typeof InputForm;
        required: true;
        validator: (value: InputForm) => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cancelled: (...args: any[]) => void;
    loading: (...args: any[]) => void;
    loaded: (...args: any[]) => void;
    results: (...args: any[]) => void;
    reset_form: (...args: any[]) => void;
    updated: (...args: any[]) => void;
    "update:form": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    form: {
        type: typeof InputForm;
        required: true;
        validator: (value: InputForm) => boolean;
    };
}>> & {
    onCancelled?: (...args: any[]) => any;
    onLoading?: (...args: any[]) => any;
    onLoaded?: (...args: any[]) => any;
    onResults?: (...args: any[]) => any;
    onReset_form?: (...args: any[]) => any;
    onUpdated?: (...args: any[]) => any;
    "onUpdate:form"?: (...args: any[]) => any;
}, {}, {}>;
export default _default;
//# sourceMappingURL=InputForm.vue.d.ts.map