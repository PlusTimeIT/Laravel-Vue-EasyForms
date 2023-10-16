import { AxiosHeader } from "./AxiosHeader";

export class AxiosOptions {
  expecting_results = false;
  headers: AxiosHeader[] = [];
  multi_part = false;

  constructor(init?: Partial<AxiosOptions>) {
    Object.assign(this, init);
  }
}
