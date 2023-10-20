import { FieldType } from "#/types/FieldType";
import { ValidationRule } from "#/classes/properties";
export declare class FunctionBuilder {
    static expectingArray: string[];
    static expectingFieldMessage: string[];
    static expectingSplit: string[];
    static expectingSingleValue: string[];
    static expectingAllFields: string[];
    static expectingComparison: string[];
    static expectingComparisonAndValue: string[];
    static buildArgs(field: FieldType, fields: FieldType[], rule: ValidationRule): Array<any>;
    static shouldPassAllFields(name: string): boolean;
    static shouldPassArray(name: string): boolean;
    static shouldPassFieldMessage(name: string): boolean;
    static shouldSplit(name: string): boolean;
    static shouldPass(name: string): boolean;
}
//# sourceMappingURL=FunctionBuilder.d.ts.map