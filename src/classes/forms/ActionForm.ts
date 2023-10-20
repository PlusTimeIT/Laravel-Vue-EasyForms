import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "#/classes/actions";
import { JustifyRow } from "#/enums/JustifyRow";
import { AxiosCalls } from "#/enums/AxiosCalls";
import { ServerCall } from "#/classes/server/ServerCall";
import { ServerResponse } from "#/classes/server/ServerResponse";

/**
 * Action form that uses action buttons and icons.
 */
export class ActionForm extends EasyForm {
  actions: Array<ActionIcon | ActionButton> = [];
  callback = "";
  justify_row: JustifyRow = JustifyRow.Center;
  inline = false;
  type = "action";

  constructor(init?: Partial<ActionForm>) {
    super(init);
    Object.assign(this, init);
  }

  async process(action_identifier: string): Promise<object | boolean> {
    let response: ServerResponse;
    this.isLoading(true);
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        "url",
        ServerCall.mergeData(this.data(action_identifier), this.additional_load_data.toObject()),
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

  data(action_identifier: string): FormData {
    // load action identifier
    const data: FormData = new FormData();
    data.set("form_name", this.name);
    data.set("action", action_identifier);
    return data;
  }

  props(): object {
    return {};
  }
}
