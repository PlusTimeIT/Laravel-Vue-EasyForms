import { Alert } from "../classes/elements";
import { AdditionalData, AxiosOptions, FormLoader } from "../classes/properties";
import { FieldType } from "../types";
export default interface HasForm {
  additional_data: AdditionalData[];
  additional_load_data: AdditionalData[];
  alerts: Alert[];
  axios: AxiosOptions;
  loader: FormLoader;
  loading: boolean;
  name: string;
  original: Array<FieldType>;
  results: any;
  title: string;
  type: string;
  text: string;
}
