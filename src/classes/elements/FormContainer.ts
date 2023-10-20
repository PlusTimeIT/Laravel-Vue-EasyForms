import { GotProps } from "../../abstracts/GotProps";

export class FormContainer extends GotProps {
  cols = 12;
  lg = 12;
  md = 12;
  sm = 12;

  constructor(init?: Partial<FormContainer>) {
    super(init);
    Object.assign(this, init);
  }
}
