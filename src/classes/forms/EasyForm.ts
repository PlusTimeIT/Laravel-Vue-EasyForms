import HasForm from "../../contracts/HasForm";
import { isArray, isEmpty } from "../../composables/utils";
import { AlertTriggers, FormLoaderTypes } from "../../enums";
import { AxiosCalls } from "../../enums";
import { Alert, ProgressCircular } from "../elements";
import { ServerCall, ServerResponse } from "../../classes/server";
import { AdditionalData, AxiosOptions } from "../../classes/properties";
import { FieldType } from "../../types";
import { store } from "../../composables/utils";
import { FormLoader } from "../properties/FormLoader";

/**
 * Basic Form Class
 */
export class EasyForm implements HasForm {
  additional_data: AdditionalData[] = [];
  additional_load_data: AdditionalData[] = [];
  alerts: Alert[] = [];
  axios: AxiosOptions = new AxiosOptions();
  loader: FormLoader;
  loading = true;
  name = "";
  original: Array<FieldType> = [];
  results: any = null;
  text = "";
  title = "";
  type = "";

  constructor(init?: Partial<EasyForm>) {
    // assign properties that require calculation first.
    if (!isEmpty(init?.alerts) && isArray(init?.alerts)) {
      for (const alert of init?.alerts ?? []) {
        this.alerts.push(new Alert(alert));
      }
      delete init?.alerts;
    }

    if (!isEmpty(init?.axios)) {
      this.axios = new AxiosOptions(init?.axios);
      delete init?.axios;
    }

    if (!isEmpty(init?.loader)) {
      this.loader = new FormLoader(init?.loader);
      delete init?.loader;
    }

    Object.assign(this, init);

    if (isEmpty(this.loader)) {
      this.loader = new FormLoader({
        type: FormLoaderTypes.Circular,
        progress: new ProgressCircular({ indeterminate: true, color: "primary" }),
      });
    }
  }

  cancelled(): this {
    this.triggerAlert(AlertTriggers.Cancelled);
    return this;
  }

  failed(text?: any): this {
    this.triggerAlert(AlertTriggers.FailedProcessing, text);
    return this;
  }

  failedValidation(text?: any): this {
    this.triggerAlert(AlertTriggers.FailedValidation, text);
    return this;
  }

  hasResults(results: any): this {
    this.results = results;
    return this;
  }

  isLoading(loading: boolean): this {
    this.loading = loading;
    return this;
  }

  async load(): Promise<object | boolean> {
    let response: ServerResponse;
    this.triggerAlert(AlertTriggers.BeforeLoad);
    this.isLoading(true);

    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/load"),
        ServerCall.mergeData({ form_name: this.name }, this.additional_load_data),
        this.axios,
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(response?.data?.loader ?? false);

        if (!response?.data?.result) {
          this.triggerAlert(AlertTriggers.FailedLoad);
          return false;
        }
        // how can you trigger an alert when data hasn't loaded yet?
        // load data into temp EasyForm class first -> load returns
        const tempForm = JSON.parse(JSON.stringify(response?.data?.data));
        if (isEmpty(tempForm.type)) {
          // form not loaded
          this.triggerAlert(AlertTriggers.FailedLoad);
          return false;
        }

        return tempForm;
      }
    } catch (error) {
      this.triggerAlert(AlertTriggers.FailedLoad);
      return false;
    }
    this.triggerAlert(AlertTriggers.FailedLoad);
    return false;
  }

  processing(): this {
    this.triggerAlert(AlertTriggers.BeforeProcessing);
    return this;
  }

  processed(): this {
    this.triggerAlert(AlertTriggers.AfterProcessing);
    return this;
  }

  props(): object {
    return {
      text: this.text,
    };
  }

  hideAllAlerts(): this {
    this.alerts.forEach((alert) => alert.hide());
    return this;
  }

  reset(): this {
    this.hideAllAlerts();
    this.triggerAlert(AlertTriggers.FormReset);
    return this;
  }

  resetAlerts(triggers: AlertTriggers[] = []): this {
    if (isEmpty(triggers.length)) {
      triggers = [AlertTriggers.SuccessProcessing, AlertTriggers.FailedProcessing];
    }
    for (const alert of this.alerts) {
      if (!triggers.includes(alert.trigger)) {
        // trigger not found, skip resetting.
        continue;
      }
      alert.reset();
    }
    return this;
  }

  success(text?: any): this {
    console.log("success alert");
    this.triggerAlert(AlertTriggers.SuccessProcessing, text);
    return this;
  }

  triggerAlert(trigger: AlertTriggers, text = ""): this {
    const alert: Alert | undefined = this.alerts.find((a) => a.trigger == trigger);
    if (isEmpty(alert)) {
      // alert not found, nothing to trigger
      return this;
    }
    alert?.convertContents(text).show().autoClose();
    return this;
  }
}
