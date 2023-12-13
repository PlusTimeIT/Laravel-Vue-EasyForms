import HasForm from "../../contracts/HasForm";
import { AlertTriggers } from "../../enums";
import { Alert } from "../elements";
import { AdditionalData, AxiosOptions } from "../properties";
import { FieldType } from "../../types";
import { FormLoader } from "../properties";
/**
 * Basic Form Class
 */
export declare class EasyForm implements HasForm {
    additional_data: AdditionalData[];
    additional_load_data: AdditionalData[];
    alerts: Alert[];
    axios: AxiosOptions;
    loader: FormLoader | undefined;
    loading: boolean;
    name: string;
    original: Array<FieldType>;
    results: any;
    text: string;
    title: string;
    type: string;
    constructor(init?: Partial<EasyForm>);
    cancelled(): this;
    failed(text?: any): this;
    failedValidation(text?: any): this;
    hasResults(results: any): this;
    isLoading(loading: boolean): this;
    load(): Promise<object | boolean>;
    processing(): this;
    processed(): this;
    props(): object;
    hideAllAlerts(): this;
    reset(): this;
    success(text?: any): this;
    triggerAlert(trigger: AlertTriggers, text?: string): this;
}
//# sourceMappingURL=EasyForm.d.ts.map