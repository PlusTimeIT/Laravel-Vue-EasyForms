import { EasyForm } from "./EasyForm";
import { ActionIcon, ActionButton } from "../actions";
import { FormTypes, JustifyRow } from "../../enums";
import { AxiosCalls } from "../../enums";
import { ServerCall } from "../server";
import { isArray, isEmpty, store } from "../../utils";
import { getClassConstructor } from "../utils/ClassRegistry";
import HasActionForm from "../../contracts/HasActionForm";
import { AxiosResponse } from "axios";
import { HasAxiosReturn } from "../../contracts/HasAxiosReturn";

/**
 * Action form that uses action buttons and icons.
 */
export class ActionForm extends EasyForm implements HasActionForm
{
  // actions: Array<ActionIcon | ActionButton> = [];
  actions: Array<ActionIcon | ActionButton> = [];
  callback = "";
  inline = false;
  justify_row: JustifyRow = JustifyRow.Center;
  type = FormTypes.Action;

  constructor(init?: Partial<ActionForm>)
  {
    super(init);
    if (!isEmpty(init?.actions) && isArray(init?.actions))
    {
      for (const action of init?.actions ?? [])
      {
        if (action instanceof ActionIcon || action instanceof ActionButton)
        {
          this.actions.push(action);
        } else if (!isEmpty(action["discriminator"]))
        {
          const className = action["discriminator"];
          this.instantiateAction(className, action);
        }
      }
      delete init?.actions;
    }

    Object.assign(this, init);
  }

  instantiateAction(className: string, data: any)
  {
    const classConstructor = getClassConstructor(className);
    if (classConstructor)
    {
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
    } else
    {
      console.error(`Class "${className}" not found in the registry.`);
    }
  }

  data(action_identifier: string): FormData
  {
    // load action identifier
    const data: FormData = new FormData();
    data.set("form_name", this.name);
    data.set("form_action", action_identifier);
    return data;
  }

  async process(action_identifier: string, recaptchaToken?: string | undefined): Promise<object | boolean>
  {
    let response: AxiosResponse<HasAxiosReturn>;
    this.isLoading(true);
    if (!isEmpty(recaptchaToken))
    {
      this.additional_data.push({ key: "recaptcha_token", value: recaptchaToken });
    }
    try
    {
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/process"),
        ServerCall.mergeData(this.data(action_identifier), this.additionalArrayToObject(this.additional_data)),
        this.axios,
      );
      if (response.status === 200 || response.status === 204)
      {
        this.isLoading(response?.data?.loader ?? false);
        this.redirect(response?.data?.redirect);
        if (!response?.data?.result)
        {
          return false;
        }
        return JSON.parse(JSON.stringify(response.data));
      }
    } catch (error)
    {
      return false;
    }
    return false;
  }

  props(): object
  {
    return {};
  }
}
