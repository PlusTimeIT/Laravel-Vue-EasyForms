import type HasProps from "../contracts/HasProps";
/**
 *  Abstract class for elements, fields etc, that require props and prop checks.
 */
export declare abstract class GotProps implements HasProps {
    constructor(init?: Partial<GotProps>);
    allowedProps(): string[];
    props(): object;
}
//# sourceMappingURL=GotProps.d.ts.map