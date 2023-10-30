import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "../../classes/actions";
import { JustifyRow } from "../../enums";
import { AxiosCalls } from "../../enums";
import { ServerCall } from "../../classes/server/ServerCall";
import { ServerResponse } from "../../classes/server/ServerResponse";

/**
 * Action form that uses action buttons and icons.
 */
export class ActionForm extends EasyForm {
  actions: Array<ActionIcon | ActionButton> = [];
  callback = "";
  inline = false;
  justify_row: JustifyRow = JustifyRow.Center;
  type = "action-form";

  constructor(init?: Partial<ActionForm>) {
    super(init);
    Object.assign(this, init);
  }

  data(action_identifier: string): FormData {
    // load action identifier
    const data: FormData = new FormData();
    data.set("form_name", this.name);
    data.set("action", action_identifier);
    return data;
  }

  async process(action_identifier: string): Promise<object | boolean> {
    let response: ServerResponse;
    this.isLoading(true);
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        "url",
        ServerCall.mergeData(this.data(action_identifier), this.additional_load_data.toObject()),
        this.axios,
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(response?.data?.loader ?? false);

        if (!response?.data?.result) {
          return false;
        }
        // Load results into form.
        // reset form?
        const results = JSON.parse(JSON.stringify(response.data));
        return results;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  props(): object {
    return {};
  }
}
