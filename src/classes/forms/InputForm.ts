import { EasyForm } from "./EasyForm";
import { JustifyRow } from "#/enums";
import { AlignRow } from "#/enums";
import { Button } from "#/classes/elements";
import { AxiosHeader } from "#/classes/properties/AxiosHeader";
import { DataItem } from "#/classes/properties/DataItem";
import { isArray, isObject, isEmpty } from "#/composables/utils/Types";
import { ContentTypes } from "#/enums";
import type { FieldType } from "#/types";

/**
 * Input form that uses input fields
 */
export class InputForm extends EasyForm {
  button_align_row: AlignRow = AlignRow.Center;
  button_justify_row: JustifyRow = JustifyRow.Center;
  buttons: Button[] = [];
  fields: FieldType[] = [];
  type = "input";

  constructor(init?: Partial<InputForm>) {
    super(init);
    Object.assign(this, init);

    // save original field values.
    if (init !== undefined && init.fields !== undefined) {
      this.original = init.fields.map((field) => new DataItem({ key: field.name, value: field.value })) ?? [];
    }
  }

  reset(): this {
    super.reset();
    // TODO: Custom components not resetting on value: DatePicker, TimePicker, ColorPicker, PasswordField
    this.original.forEach((data) => {
      const field: FieldType | undefined = this.fields.find((f) => f.name == data.key);
      if (isEmpty(field)) {
        // alert not found, nothing to trigger
        return this;
      }
      field!.value = data.value;
    });
    return this;
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
      if (isArray(field.value)) {
        field.value.forEach((value: any) => {
          data.set(this.formatForArrayOrObject(field.name), value);
        });
      } else if (isObject(field.value)) {
        data.set(this.formatForArrayOrObject(field.name), field.value);
      } else {
        data.set(field.name, field.value);
      }
    });
    return data;
  }

  formatForArrayOrObject(name: string): string {
    return name + "[]";
  }

  async process(): Promise<object | boolean> {
    const content_header: AxiosHeader | undefined = this.axios.headers.find(
      (header: AxiosHeader) => header.key == "Content-Type",
    );
    let content_type: ContentTypes = ContentTypes.Application;
    if (this.axios.multi_part) {
      content_type = ContentTypes.MultiPart;
    }
    if (isEmpty(content_header)) {
      this.axios.headers.push(new AxiosHeader({ key: "Content-Type", value: content_type }));
    } else {
      content_header!.value = content_type;
    }

    // continue processing form.
    return false;
  }

  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props(): object {
    const result: any = {};
    result["enctype"] = ContentTypes.Application;
    if (this.axios.multi_part) {
      result["enctype"] = ContentTypes.MultiPart;
    }
    return result;
  }
}
