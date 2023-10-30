import HasProps from "../contracts/HasProps";
export declare abstract class GotProps implements HasProps {
    constructor(init?: Partial<GotProps>);
    allowedProps(): string[];
    props(): object;
}
//# sourceMappingURL=GotProps.d.ts.map