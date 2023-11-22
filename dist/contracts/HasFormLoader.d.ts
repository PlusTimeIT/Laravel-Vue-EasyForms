import { FormLoaderTypes } from "../enums";
import { ProgressCircular, ProgressLinear } from "../classes/elements";
export default interface HasFormLoader {
    type: FormLoaderTypes;
    progress: ProgressLinear | ProgressCircular;
}
//# sourceMappingURL=HasFormLoader.d.ts.map