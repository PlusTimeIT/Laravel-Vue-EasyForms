import { FormLoaderTypes } from "../../enums";
import { ProgressCircular, ProgressLinear } from "../elements";

export class FormLoader {
  type: FormLoaderTypes;
  progress: ProgressLinear | ProgressCircular;

  constructor(init?: Partial<FormLoader>) {
    Object.assign(this, init);
    if (this.type == FormLoaderTypes.Circular) {
      this.progress = new ProgressCircular(init?.progress as ProgressCircular);
    } else if (this.type == FormLoaderTypes.Linear) {
      this.progress = new ProgressLinear(init?.progress as ProgressLinear);
    }
  }
}
