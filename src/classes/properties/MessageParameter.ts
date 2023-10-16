export class MessageParameter {
  key = "";
  replace_with: any;

  constructor(init?: Partial<MessageParameter>) {
    Object.assign(this, init);
  }
}
