import type { ValidationFunction } from "../../types";
/**
 * Validation handler for converting backend validations to frontend
 */
export declare class ValidationHandler {
    protected static accepted_booleans: Array<string | number | boolean>;
    protected static accepted_values: Array<string | number | boolean>;
    protected static declined_values: Array<string | number | boolean>;
    static accepted: ValidationFunction<any>;
    static array: ValidationFunction<any>;
    static between: ValidationFunction<any>;
    static boolean: ValidationFunction<any>;
    static confirmed: ValidationFunction<any>;
    static decimal: ValidationFunction<any>;
    static declined: ValidationFunction<any>;
    static different: ValidationFunction<any>;
    static digits: ValidationFunction<any>;
    static digits_between: ValidationFunction<any>;
    static doesnt_end_with: ValidationFunction<any>;
    static doesnt_start_with: ValidationFunction<any>;
    static email: ValidationFunction<any>;
    static ends_with: ValidationFunction<any>;
    static file: ValidationFunction<any>;
    static in_array: ValidationFunction<any>;
    static integer: ValidationFunction<any>;
    static is_in: ValidationFunction<any>;
    static lowercase: ValidationFunction<any>;
    static max: ValidationFunction<any>;
    static max_digits: ValidationFunction<any>;
    static min: ValidationFunction<any>;
    static min_digits: ValidationFunction<any>;
    static multiple_of: ValidationFunction<any>;
    static not_in: ValidationFunction<any>;
    static not_regex: ValidationFunction<any>;
    static numeric: ValidationFunction<any>;
    static regex: ValidationFunction<any>;
    static required: ValidationFunction<any>;
    static required_if: ValidationFunction<any>;
    static required_unless: ValidationFunction<any>;
    static required_with: ValidationFunction<any>;
    static required_with_all: ValidationFunction<any>;
    static required_without: ValidationFunction<any>;
    static required_without_all: ValidationFunction<any>;
    static same: ValidationFunction<any>;
    static starts_with: ValidationFunction<any>;
    static string: ValidationFunction<any>;
    static ulid: ValidationFunction<any>;
    static uppercase: ValidationFunction<any>;
    static uuid: ValidationFunction<any>;
}
//# sourceMappingURL=ValidationHandler.d.ts.map