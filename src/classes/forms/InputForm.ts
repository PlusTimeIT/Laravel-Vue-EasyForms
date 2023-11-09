/* eslint-disable @typescript-eslint/no-unused-vars */
import { EasyForm } from "./EasyForm";
import { AxiosCalls, JustifyRow } from "../../enums";
import { AlignRow } from "../../enums";
import { Button } from "../elements";
import { DataItem } from "../../classes/properties/DataItem";
import { isArray, isObject, isEmpty, store } from "../../composables/utils";
import { ContentTypes } from "../../enums";
import type { FieldType } from "../../types";

import {
  AutoCompleteField,
  CheckboxField,
  CheckboxGroupField,
  ColorPickerField,
  ColorPicker,
  DatePickerField,
  DatePicker,
  FileInputField,
  PasswordField,
  RadioGroupField,
  RadioField,
  SwitchField,
  TextField,
  TimePickerField,
  TimePicker,
} from "../../classes/fields";
import { getClassConstructor } from "../utils/ClassRegistry";
import { ServerCall, ServerResponse } from "../server";

interface ErrorMessage {
  id: string;
  errorMessages: string[];
}

/**
 * Input form that uses input fields
 */
export class InputForm extends EasyForm {
  button_align_row: AlignRow = AlignRow.Center;
  button_justify_row: JustifyRow = JustifyRow.Center;
  buttons: Button[] = [];
  fields: Array<FieldType> = [];
  original: Array<FieldType> = [];
  type = "input-form";

  constructor(init?: Partial<InputForm>) {
    super(init);
    if (!isEmpty(init?.fields) && isArray(init?.fields)) {
      for (const field of init?.fields ?? []) {
        if (!isEmpty(field.discriminator)) {
          const className = field.discriminator;
          this.instantiateField(className, field);
        }
      }
      delete init?.fields;
    }

    if (!isEmpty(init?.buttons) && isArray(init?.buttons)) {
      for (const button of init?.buttons ?? []) {
        this.buttons.push(new Button(button));
      }
      delete init?.buttons;
    }

    Object.assign(this, init);

    this.original = this.fields.map((x) => Object.assign({}, x));
    // order fields
    this.fields = this.fields.sort((a, b) => a.order - b.order);
    // order buttons
    this.buttons = this.buttons.sort((a, b) => a.order - b.order);
  }

  data(): object {
    // check for additional data with key identifier
    const identifier = this.additional_data.data.find((data: DataItem) => data.key == "identifier" || data.key == "id");

    const data: FormData = new FormData();
    data.set("form_name", this.name);
    if (!isEmpty(identifier)) {
      data.set("id", identifier?.value);
    }

    this.fields.forEach((field: any) => {
      if (!isEmpty(field.value)) {
        if (isArray(field.value)) {
          field.value.forEach((value: any) => {
            data.set(this.formatForArrayOrObject(field.name), value);
          });
        } else if (isObject(field.value)) {
          data.set(this.formatForArrayOrObject(field.name), field.value);
        } else {
          data.set(field.name, field.value);
        }
      }
    });
    return data;
  }

  formatForArrayOrObject(name: string): string {
    return name + "[]";
  }

  instantiateField(className: string, fieldData: any) {
    const classConstructor = getClassConstructor(className);
    if (classConstructor) {
      // Currently throws:
      // Expected 0 arguments, but got 1.ts(2554)
      // (parameter) fieldData: any
      // Dynamic class loading needs to be looked into for a better solution.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const instance = new classConstructor(fieldData);
      // instance not assignable to fieldtype?
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.fields.push(instance);
    } else {
      console.error(`Class "${className}" not found in the registry.`);
    }
  }

  async process(): Promise<object | boolean> {
    this.processing();
    // continue to processing form.
    let response: ServerResponse;
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/process"),
        ServerCall.mergeData(this.data(), this.additional_data.toObject()),
        this.axios,
      );
      this.processed();
      if (response.status === 200 || response.status === 204) {
        this.isLoading(response?.data?.loader ?? false);
        const tempResult = JSON.parse(JSON.stringify(response?.data?.data));
        if (response?.data?.result) {
          this.success(response?.data?.data);
          return response?.data?.data;
        }
        // check if validation errors: validation_errors
        if (!isEmpty(tempResult?.validation_errors)) {
          for (const fieldName in tempResult?.validation_errors) {
            const field = this.fields.find((f) => f.name === fieldName);
            const errors: string[] = tempResult?.validation_errors[fieldName];
            for (const error of errors) {
              field.addErrorMessage(error);
            }
          }
          this.failedValidation();
          return false;
        }
        this.failed(response?.data?.data);
        return false;
      }
    } catch (error) {
      return false;
    }
    this.failed();
    return false;
  }

  loadErrorMessages(errors: ErrorMessage[]): this {
    let validation: ErrorMessage;
    for (validation of errors) {
      const field = this.fields.find((f) => f.name === validation.id);
      for (const error of validation.errorMessages) {
        if (!this.hasErrorMessage(field, error)) {
          field.addErrorMessage(error);
        }
      }
    }
    return this;
  }

  hasErrorMessage(field: FieldType, error: string): boolean {
    if (typeof field.error_messages === "string") {
      return field.error_messages == error;
    }
    const message = field.error_messages.find((f) => f === error);
    return !isEmpty(message);
  }

  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props(): object {
    const result: any = {};
    result["enctype"] = ContentTypes.JSON;
    if (this.axios.multi_part) {
      result["enctype"] = ContentTypes.MultiPart;
    }
    return result;
  }

  reset(): this {
    super.reset();
    const originals = this.original;
    this.fields = this.fields.map((field) => {
      field.value = originals.find((f) => f.name === field.name)?.value;
      field.clearErrorMessages();
      return field;
    });
    return this;
  }
}
