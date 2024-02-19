import { FormLoaderTypes } from "../../enums";
import { ProgressCircular, ProgressLinear } from "../elements";
import HasFormLoader from "../../contracts/HasFormLoader";
export declare class FormLoader implements HasFormLoader {
    type: FormLoaderTypes;
    progress: ProgressLinear | ProgressCircular;
    constructor(init?: Partial<FormLoader>);
}
//# sourceMappingURL=FormLoader.d.ts.map