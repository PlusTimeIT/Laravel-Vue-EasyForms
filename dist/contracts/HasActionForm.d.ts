import type { Alert } from "../classes/elements";
import type { AdditionalData, AxiosOptions, FormLoader } from "../classes/properties";
import type { FieldType } from "../types";
import type { ActionButton, ActionIcon } from "../classes/actions";
import type { JustifyRow } from "../enums";
export default interface HasActionForm {
    actions: Array<Partial<ActionIcon> | Partial<ActionButton>>;
    additional_data: Partial<AdditionalData>[];
    additional_load_data: Partial<AdditionalData>[];
    alerts: Partial<Alert>[];
    axios: AxiosOptions;
    loader: FormLoader | undefined;
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