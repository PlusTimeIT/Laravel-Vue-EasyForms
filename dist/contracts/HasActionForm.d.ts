import { Alert } from "../classes/elements";
import { AdditionalData, AxiosOptions, FormLoader } from "../classes/properties";
import { FieldType } from "../types";
import { ActionButton, ActionIcon } from "../classes/actions";
import { JustifyRow } from "../enums";
export default interface HasActionForm {
    actions: Array<Partial<ActionIcon> | Partial<ActionButton>>;
    additional_data: Partial<AdditionalData>[];
    additional_load_data: Partial<AdditionalData>[];
    alerts: Partial<Alert>[];
    axios: AxiosOptions;
    loader: FormLoader;
    loading: boolean;
    name: string;
    original: Array<FieldType>;
    results: any;
    title: string;
    type: string;
    text: string;
    callback: string;
    inline: boolean;
    justify_row: JustifyRow;
}
//# sourceMappingURL=HasActionForm.d.ts.map