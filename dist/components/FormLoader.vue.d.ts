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
        type: {
            (arrayLength: number): AdditionalData[];
            (...items: AdditionalData[]): AdditionalData[];
            new (arrayLength: number): AdditionalData[];
            new (...items: AdditionalData[]): AdditionalData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: never[];
    };
    additionalLoadData: {
        type: {
            (arrayLength: number): AdditionalData[];
            (...items: AdditionalData[]): AdditionalData[];
            new (arrayLength: number): AdditionalData[];
            new (...items: AdditionalData[]): AdditionalData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: never[];
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
        type: {
            (arrayLength: number): AdditionalData[];
            (...items: AdditionalData[]): AdditionalData[];
            new (arrayLength: number): AdditionalData[];
            new (...items: AdditionalData[]): AdditionalData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: never[];
    };
    additionalLoadData: {
        type: {
            (arrayLength: number): AdditionalData[];
            (...items: AdditionalData[]): AdditionalData[];
            new (arrayLength: number): AdditionalData[];
            new (...items: AdditionalData[]): AdditionalData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: never[];
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
}, {
    cols: number;
    lg: number;
    md: number;
    sm: number;
    name: string;
    form: EasyForm;
    populate: boolean;
    additionalData: AdditionalData[];
    additionalLoadData: AdditionalData[];
}, {}>;
export default _default;
//# sourceMappingURL=FormLoader.vue.d.ts.map