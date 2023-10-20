import HasForm from "../../contracts/HasForm";
import { AlertTriggers } from "../../enums";
import { Alert } from "../../classes/elements";
import { AdditionalData, AxiosOptions, DataItem } from "../../classes/properties";
export declare class EasyForm implements HasForm {
    additional_data: AdditionalData;
    additional_load_data: AdditionalData;
    alerts: Alert[];
    axios: AxiosOptions;
    loading: boolean;
    name: string;
    original: DataItem[];
    results: any;
    text: string;
    title: string;
    type: string;
    constructor(init?: Partial<EasyForm>);
    cancelled(): this;
    failed(text: string): this;
    hasResults(results: any): this;
    isLoading(loading: boolean): this;
    load(): Promise<object | boolean>;
    processing(): this;
    props(): object;
    reset(): this;
    resetAlerts(triggers?: AlertTriggers[]): this;
    success(text: string): this;
    triggerAlert(trigger: AlertTriggers, text?: string): this;
}
//# sourceMappingURL=EasyForm.d.ts.map