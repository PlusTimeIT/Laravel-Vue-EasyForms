import { EasyForm } from "#/classes/forms";
import { AdditionalData } from "#/classes/properties";
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
    loading: (value: boolean) => void;
    loaded: (value: boolean) => void;
    results: (value: any) => void;
    cancelled: (value: boolean) => void;
    updated: (value: any) => void;
    reset_form: (value: boolean) => void;
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
    onCancelled?: (value: boolean) => any;
    onLoading?: (value: boolean) => any;
    onLoaded?: (value: boolean) => any;
    onResults?: (value: any) => any;
    onReset_form?: (value: boolean) => any;
    onUpdated?: (value: any) => any;
}, {
    name: string;
    cols: number;
    sm: number;
    md: number;
    lg: number;
    form: EasyForm;
    populate: boolean;
    additionalData: AdditionalData;
    additionalLoadData: AdditionalData;
}, {}>;
export default _default;
//# sourceMappingURL=FormLoader.vue.d.ts.map