import { Alert } from "../classes/elements";
import { AdditionalData } from "../classes/properties/AdditionalData";
import { AxiosOptions } from "../classes/properties/AxiosOptions";
import { FieldType } from "../types";
export default interface HasForm {
  additional_data: AdditionalData;
  additional_load_data: AdditionalData;
  alerts: Alert[];
  axios: AxiosOptions;
  loading: boolean;
  name: string;
  original: Array<FieldType>;
  results: any;
  title: string;
  type: string;
  text: string;
}
