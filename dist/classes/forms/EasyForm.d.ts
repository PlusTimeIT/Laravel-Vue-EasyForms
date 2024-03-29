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
    google_recaptcha_site_key: string | null;
    loader: FormLoader | undefined;
    loading: boolean;
    name: string;
    original: Array<FieldType>;
    results: any;
    show_title: boolean;
    text: string;
    title: string;
    type: string;
    constructor(init?: Partial<EasyForm>);
    cancelled(): this;
    failed(text?: any): this;
    failedValidation(text?: any): this;
    hasResults(results: any): this;
    isLoading(loading: boolean): this;
    additionalArrayToObject(additionalData: AdditionalData[]): any;
    load(): Promise<object | boolean>;
    processing(): this;
    processed(): this;
    props(): object;
    hideAllAlerts(): this;
    reset(): this;
    redirect(redirect: string | undefined): void;
    success(text?: any): this;
    triggerAlert(trigger: AlertTriggers, text?: string): this;
}
//# sourceMappingURL=EasyForm.d.ts.map