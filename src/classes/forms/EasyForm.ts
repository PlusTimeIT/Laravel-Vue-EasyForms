import HasForm from "../../contracts/HasForm";
import { isArray, isEmpty } from "../../composables/utils/Types";
import { AlertTriggers } from "../../enums";
import { AxiosCalls } from "../../enums";
import { Alert } from "../../classes/elements";
import { ServerCall, ServerResponse } from "../../classes/server";
import { AdditionalData, AxiosOptions, DataItem } from "../../classes/properties";
/**
 * Basic Form Class
 */
export class EasyForm implements HasForm {
  additional_data: AdditionalData = new AdditionalData();
  additional_load_data: AdditionalData = new AdditionalData();
  alerts: Alert[] = [];
  axios: AxiosOptions = new AxiosOptions();
  loading = true;
  name = "";
  original: DataItem[] = [];
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

    Object.assign(this, init);
  }

  cancelled(): this {
    this.triggerAlert(AlertTriggers.Cancelled);
    return this;
  }

  failed(text: string): this {
    this.triggerAlert(AlertTriggers.FailedProcessing, text);
    return this;
  }

  hasResults(results: any): this {
    this.results = results;
    // this.emit(LoaderEvents.Results, results);
    return this;
  }

  isLoading(loading: boolean): this {
    this.loading = loading;
    return this;
  }

  async load(): Promise<object | boolean> {
    let response: ServerResponse;
    this.isLoading(true);
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        "url",
        ServerCall.mergeData({ form_name: this.name }, this.additional_load_data.toObject()),
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(response?.data?.loader ?? false);

        if (!response?.data?.result) {
          return false;
        }
        // how can you trigger an alert when data hasn't loaded yet?
        // load data into temp EasyForm class first -> load returns
        Object.assign(this, JSON.parse(JSON.stringify(response.data)));
        // save original fom data.
        const tempForm = JSON.parse(JSON.stringify(response.data));
        if (isEmpty(tempForm.type)) {
          // form not loaded
          this.triggerAlert(AlertTriggers.FailedLoad);
          return false;
        }

        this.triggerAlert(AlertTriggers.AfterLoad);

        return tempForm;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  processing(): this {
    console.log("PROCESSING TRIGGERED");
    this.triggerAlert(AlertTriggers.BeforeProcessing);
    return this;
  }

  props(): object {
    return {
      text: this.text,
    };
  }

  reset(): this {
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

  success(text: string): this {
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
