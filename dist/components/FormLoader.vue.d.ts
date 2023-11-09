import { EasyForm } from "../classes/forms";
import { AdditionalData } from "../classes/properties";
declare const _default: import("vue").DefineComponent<{
    form: {
        type: (typeof EasyForm)[];
        default: EasyForm;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    sm: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    md: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    lg: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    populate: {
        type: BooleanConstructor;
        default: boolean;
    };
    additionalData: {
        type: typeof AdditionalData;
        default: AdditionalData;
    };
    additionalLoadData: {
        type: typeof AdditionalData;
        default: AdditionalData;
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
        type: (typeof EasyForm)[];
        default: EasyForm;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    sm: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    md: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    lg: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    populate: {
        type: BooleanConstructor;
        default: boolean;
    };
    additionalData: {
        type: typeof AdditionalData;
        default: AdditionalData;
    };
    additionalLoadData: {
        type: typeof AdditionalData;
        default: AdditionalData;
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
}, {
    name: string;
    cols: number;
    lg: number;
    md: number;
    sm: number;
    form: EasyForm;
    populate: boolean;
    additionalData: AdditionalData;
    additionalLoadData: AdditionalData;
}, {}>;
export default _default;
//# sourceMappingURL=FormLoader.vue.d.ts.map