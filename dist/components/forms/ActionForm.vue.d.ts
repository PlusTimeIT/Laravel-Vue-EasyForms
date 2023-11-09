import { ActionForm } from "../../classes/forms";
declare const _default: import("vue").DefineComponent<{
    form: {
        type: typeof ActionForm;
        required: true;
        validator: (value: ActionForm) => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:form": (...args: any[]) => void;
    loading: (...args: any[]) => void;
    loaded: (...args: any[]) => void;
    results: (...args: any[]) => void;
    reset: (...args: any[]) => void;
    cancelled: (...args: any[]) => void;
    processing: (...args: any[]) => void;
    failed: (...args: any[]) => void;
    successful: (...args: any[]) => void;
    updated: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    form: {
        type: typeof ActionForm;
        required: true;
        validator: (value: ActionForm) => boolean;
    };
}>> & {
    onReset?: (...args: any[]) => any;
    "onUpdate:form"?: (...args: any[]) => any;
    onLoading?: (...args: any[]) => any;
    onLoaded?: (...args: any[]) => any;
    onResults?: (...args: any[]) => any;
    onCancelled?: (...args: any[]) => any;
    onProcessing?: (...args: any[]) => any;
    onFailed?: (...args: any[]) => any;
    onSuccessful?: (...args: any[]) => any;
    onUpdated?: (...args: any[]) => any;
}, {}, {}>;
export default _default;
//# sourceMappingURL=ActionForm.vue.d.ts.map