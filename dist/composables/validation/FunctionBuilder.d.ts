/**
 * This class converts Laravel validation format and maps it to the correct function
 */
export declare class FunctionBuilder {
    static expectingArray: string[];
    static expectingFieldMessage: string[];
    static expectingSplit: string[];
    static expectingSingleValue: string[];
    static expectingAllFields: string[];
    static expectingComparison: string[];
    static expectingComparisonAndValue: string[];
    /** Validation requires all fields  */
    static shouldPassAllFields(name: string): boolean;
    /** Validation requires value to be an array  */
    static shouldPassArray(name: string): boolean;
    /** Validation only requires field and message  */
    static shouldPassFieldMessage(name: string): boolean;
    /** Validation value should check for splitting  */
    static shouldSplit(name: string): boolean;
    /** Validation value should be passed directly.  */
    static shouldPass(name: string): boolean;
}
//# sourceMappingURL=FunctionBuilder.d.ts.map