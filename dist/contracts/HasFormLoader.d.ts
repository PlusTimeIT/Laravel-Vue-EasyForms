import type { FormLoaderTypes } from "../enums";
import type { ProgressCircular, ProgressLinear } from "../classes/elements";
export default interface HasFormLoader {
    type: FormLoaderTypes;
    progress: ProgressLinear | ProgressCircular;
}
//# sourceMappingURL=HasFormLoader.d.ts.map