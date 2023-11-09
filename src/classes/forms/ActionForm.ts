import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "../../classes/actions";
import { JustifyRow } from "../../enums";
import { AxiosCalls } from "../../enums";
import { ServerCall } from "../../classes/server/ServerCall";
import { ServerResponse } from "../../classes/server/ServerResponse";
import { isArray, isEmpty, store } from "../../utils";
import { getClassConstructor } from "../utils/ClassRegistry";

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

    if (!isEmpty(init?.actions) && isArray(init?.actions)) {
      for (const actions of init?.actions ?? []) {
        if (!isEmpty(actions.discriminator)) {
          const className = actions.discriminator;
          this.instantiateAction(className, actions);
        }
      }
      delete init?.actions;
    }

    Object.assign(this, init);
  }

  instantiateAction(className: string, data: any) {
    const classConstructor = getClassConstructor(className);
    if (classConstructor) {
      // Currently throws:
      // Expected 0 arguments, but got 1.ts(2554)
      // (parameter) data: any
      // Dynamic class loading needs to be looked into for a better solution.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const instance = new classConstructor(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.actions.push(instance);
    } else {
      console.error(`Class "${className}" not found in the registry.`);
    }
  }

  data(action_identifier: string): FormData {
    // load action identifier
    const data: FormData = new FormData();
    data.set("form_name", this.name);
    data.set("form_action", action_identifier);
    return data;
  }

  async process(action_identifier: string): Promise<object | boolean> {
    let response: ServerResponse;
    this.isLoading(true);
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/process"),
        ServerCall.mergeData(this.data(action_identifier), this.additional_data.toObject()),
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
