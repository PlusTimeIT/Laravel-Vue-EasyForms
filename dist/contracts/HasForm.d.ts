import type { Alert } from "../classes/elements";
import type { AdditionalData, AxiosOptions, FormLoader } from "../classes/properties";
import type { FieldType } from "../types";
export default interface HasForm {
    additional_data: AdditionalData[];
    additional_load_data: AdditionalData[];
    alerts: Alert[];
    axios: AxiosOptions;
    loader: FormLoader | undefined;
    loading: boolean;
    name: string;
    original: Array<FieldType>;
    results: any;
    show_title: boolean;
    title: string;
    type: string;
    text: string;
}
//# sourceMappingURL=HasForm.d.ts.map