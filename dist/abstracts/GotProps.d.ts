import HasProps from "#/contracts/HasProps";
import HasIcon from "#/contracts/HasIcon";
export declare abstract class GotProps implements HasProps {
    constructor(init?: Partial<GotProps>);
    allowedProps(): string[];
    instanceOfA(object: any): object is HasIcon;
    props(): object;
}
//# sourceMappingURL=GotProps.d.ts.map