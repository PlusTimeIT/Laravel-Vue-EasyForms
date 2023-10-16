export class ValidationRule {
  name = "";
  value: any;
  message?: string | null = null;

  constructor(init?: Partial<ValidationRule>) {
    Object.assign(this, init);
  }
}
