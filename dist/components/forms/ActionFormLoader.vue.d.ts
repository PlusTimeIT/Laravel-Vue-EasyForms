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
    validated: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    form: {
        type: typeof ActionForm;
        required: true;
        validator: (value: ActionForm) => boolean;
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onValidated?: ((...args: any[]) => any) | undefined;
    onUpdated?: ((...args: any[]) => any) | undefined;
    onLoading?: ((...args: any[]) => any) | undefined;
    onLoaded?: ((...args: any[]) => any) | undefined;
    onResults?: ((...args: any[]) => any) | undefined;
    onCancelled?: ((...args: any[]) => any) | undefined;
    onProcessing?: ((...args: any[]) => any) | undefined;
    onFailed?: ((...args: any[]) => any) | undefined;
    onSuccessful?: ((...args: any[]) => any) | undefined;
    "onUpdate:form"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=ActionFormLoader.vue.d.ts.map