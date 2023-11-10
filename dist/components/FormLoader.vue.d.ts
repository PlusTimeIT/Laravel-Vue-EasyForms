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
        default: any[];
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
        default: any[];
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
        default: any[];
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
        default: any[];
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
    additionalData: AdditionalData[];
    additionalLoadData: AdditionalData[];
}, {}>;
export default _default;
//# sourceMappingURL=FormLoader.vue.d.ts.map