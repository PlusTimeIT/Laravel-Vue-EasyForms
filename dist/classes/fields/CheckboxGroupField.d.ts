import { EasyField } from "#/abstracts/EasyField";
import { SwitchField } from "./SwitchField";
import { CheckboxField } from "./CheckboxField";
import { CheckboxGroupValue } from "#/classes/properties/CheckboxGroupValue";
export declare class CheckboxGroupField extends EasyField {
    class: string;
    component: string;
    items: CheckboxField[];
    switch: SwitchField | undefined;
    value: CheckboxGroupValue[];
    constructor(init?: Partial<CheckboxGroupField>);
    addAllItems(): void;
    addItem(key: string, value: any): void;
    clear(): void;
    find(checkbox: CheckboxField): CheckboxGroupValue | undefined;
    removeItem(checkboxValue: CheckboxGroupValue): void;
    allowedProps(): string[];
}
//# sourceMappingURL=CheckboxGroupField.d.ts.map