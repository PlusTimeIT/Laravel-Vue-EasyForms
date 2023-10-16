<script setup lang="ts">
import { Button } from "../src/classes/elements/Button";
import { InputForm } from "../src/classes/forms/InputForm";
import { ActionForm } from "../src/classes/forms/ActionForm";
import { ButtonTypes } from "../src/enums/ButtonTypes";
import { TextField } from "../src/classes/fields/TextField";
import { Tooltip } from "../src/classes/elements/Tooltip";
import { LocationTypes } from "../src/enums/LocationTypes";
import { Icon } from "../src/classes/elements/Icon";
import { ActionButton } from "../src/classes/actions/ActionButton";
import { ActionIcon } from "../src/classes/actions/ActionIcon";
import { AutoCompleteField } from "../src/classes/fields/AutoCompleteField";
import { CheckboxField } from "../src/classes/fields/CheckboxField";
import { CheckboxGroupField } from "../src/classes/fields/CheckboxGroupField";
import { SwitchField } from "../src/classes/fields/SwitchField";
import { ColorPickerField } from "../src/classes/fields/ColorPickerField";
import { DatePickerField } from "../src/classes/fields/DatePickerField";
import { TimePickerField } from "../src/classes/fields/TimePickerField";
import { TimePicker } from "../src/classes/fields/TimePicker";
import { TimePickerModeTypes } from "../src/enums/TimePickerModeTypes";
import { DatePicker } from "../src/classes/fields/DatePicker";
import { FileInputField } from "../src/classes/fields/FileInputField";
import { PasswordField } from "../src/classes/fields/PasswordField";
import { RadioGroupField } from "../src/classes/fields/RadioGroupField";
import { RadioField } from "../src/classes/fields/RadioField";
import { ValidationRule } from "../src/classes/properties/ValidationRule";
import { ValidationTriggers } from "../src/enums/ValidationTriggers";
import { Alert } from "../src/classes/elements";
import { AlertTriggers } from "../src/enums/AlertTriggers";

const inputForm: InputForm = new InputForm({
  name: "TestForm",
  type: "input",
  fields: [
    new RadioField({
      inline: true,
      label: "test",
      value: "test",
    }),
    new RadioGroupField({
      name: "radio_group_test",
      label: "Yes this is radio group",
      items: [
        new RadioField({
          label: "test",
          value: "test",
        }),
        new RadioField({
          label: "test2",
          value: "test2",
        }),
      ],
    }),
    new TextField({
      name: "test_basic_text_and_label",
      placeholder: "Testing Basic Text and Label",
      label: "Testing Basic Text and Label",
      cols: 3,
      validate_on: ValidationTriggers.Blur,
      rules: [
        new ValidationRule({
          name: "required",
          value: true,
        }),
      ],
    }),
    new TextField({
      name: "test_validation_between",
      placeholder: "Testing Validation Between",
      label: "Testing Validation Between",
      cols: 3,
      validate_on: ValidationTriggers.Blur,
      rules: [
        new ValidationRule({
          name: "required",
          value: true,
        }),
        new ValidationRule({
          name: "numeric",
          value: true,
        }),
        new ValidationRule({
          name: "between",
          value: "1,9",
        }),
      ],
    }),
    new TextField({
      name: "test_basic_text_and_label_offset",
      placeholder: "Testing Basic Text and Label Offset",
      required: true,
      cols: 3,
      offset: 1,
    }),
    new TextField({
      name: "test_basic_cols",
      placeholder: "Testing Basic Cols With Counter",
      cols: 3,
      counter: true,
      persistent_counter: true,
    }),
    new PasswordField({
      name: "test_password",
      placeholder: "Password Field",
      cols: 3,
      show_strength_bar: false,
      view_mode: true,
    }),
    new FileInputField({
      name: "test_file_input",
      label: "Testing File Input",
      cols: 6,
    }),
    new AutoCompleteField({
      name: "test_autocomplete",
      placeholder: "Testing Autocomplete",
      item_title: "name",
      item_value: "id",
      cols: 6,
      items: [
        { id: 0, name: "tester 1" },
        { id: 1, name: "tester 2" },
        { id: 2, name: "tester 3" },
        { id: 3, name: "tester 4" },
        { id: 4, name: "tester 5" },
      ],
    }),
    new ColorPickerField({
      name: "color_picker",
      cols: 6,
    }),
    new DatePickerField({
      name: "date_picker",
      cols: 3,
    }),
    new DatePickerField({
      name: "date_picker_icon",
      cols: 3,
      picker: new DatePicker({
        width: 360,
        format: "DD/MM/YYYY",
        show_adjacent_months: false,
      }),
      textfield: new TextField({
        name: "date_picker_months",
        label: "Date Picker Months",
        readonly: true,
        prepend_inner_icon: new Icon({
          color: "secondary",
          icon: "mdi-calendar-month",
          size: "large",
        }),
      }),
    }),
    new TimePickerField({
      cols: 3,
    }),
    new TimePickerField({
      cols: 3,
      picker: new TimePicker({
        mode: TimePickerModeTypes.Military,
      }),
      textfield: new TextField({
        name: "time_picker_military_value",
        label: "Time Picker Military",
        readonly: true,
        prepend_inner_icon: new Icon({
          icon: "mdi-clock-outline",
          size: "large",
        }),
      }),
    }),
    new TextField({
      name: "test_basic_cols_with_clearable",
      placeholder: "Testing Basic Cols With Clearable",
      cols: 3,
      clearable: true,
    }),
    new TextField({
      name: "test_icon_prepend",
      placeholder: "Testing Icon Prepend",
      cols: 3,
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-account-box",
        tooltip: new Tooltip({
          text: "Name: Bob Down",
          location: LocationTypes.Top,
        }),
      }),
    }),
    new TextField({
      name: "test_icon_prepend_inner",
      placeholder: "Testing Icon Prepend Inner",
      cols: 3,
      prepend_inner_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "Im helping",
          location: LocationTypes.Top,
        }),
      }),
    }),
    new TextField({
      name: "test_icon_append",
      placeholder: "Testing Icon Append",
      cols: 3,
      append_icon: new Icon({
        color: "secondary",
        icon: "mdi-airplane-landing",
        tooltip: new Tooltip({
          text: "Landing Time: 03:00pm",
          location: LocationTypes.Bottom,
        }),
      }),
    }),
    new TextField({
      name: "test_icon_append_inner",
      placeholder: "Testing Icon Append Inner",
      cols: 3,
      append_inner_icon: new Icon({
        color: "secondary",
        icon: "mdi-alert-decagram",
        tooltip: new Tooltip({
          text: "ALERT! THIS IS IMPORTANT",
          location: LocationTypes.Bottom,
        }),
      }),
    }),
    new TextField({
      name: "test_icon_prepend_and_append",
      placeholder: "Testing Icon Prepend and Append",
      cols: 3,
      append_icon: new Icon({
        color: "secondary",
        icon: "mdi-home",
        tooltip: new Tooltip({
          text: "this is helpful",
          location: LocationTypes.Bottom,
        }),
      }),
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "helping",
          location: LocationTypes.Top,
        }),
      }),
    }),
    new TextField({
      name: "test_icon_prepend_and_append_inner",
      placeholder: "Testing Icon Prepend Inner and Append Inner",
      cols: 3,
      append_inner_icon: new Icon({
        color: "secondary",
        icon: "mdi-home",
        tooltip: new Tooltip({
          text: "this is helpful",
          location: LocationTypes.Bottom,
        }),
      }),
      prepend_inner_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "helping",
          location: LocationTypes.Top,
        }),
      }),
    }),
    new TextField({
      name: "test_icon_prepend_and_append_all",
      placeholder: "Testing Icon Prepend Inner and Append All",
      cols: 3,
      append_icon: new Icon({
        color: "secondary",
        icon: "mdi-home",
        tooltip: new Tooltip({
          text: "this is helpful",
          location: LocationTypes.Bottom,
        }),
      }),
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "helping",
          location: LocationTypes.Top,
        }),
      }),
      append_inner_icon: new Icon({
        color: "secondary",
        icon: "mdi-home",
        tooltip: new Tooltip({
          text: "this is helpful",
          location: LocationTypes.Bottom,
        }),
      }),
      prepend_inner_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "helping",
          location: LocationTypes.Top,
        }),
      }),
    }),
    new TextField({
      name: "test_masking",
      placeholder: "Testing Masking",
      cols: 3,
      masking: "####-##",
    }),
    new CheckboxField({
      name: "text_checkbox",
      label: "Testing checkbox",
      cols: 3,
    }),
    new CheckboxField({
      name: "text_checkbox_icons",
      label: "Testing checkbox custom Icons",
      cols: 3,
      true_icon: new Icon({
        icon: "mdi-emoticon-happy-outline",
      }),
      false_icon: "mdi-emoticon-sad-outline",
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "prepend icon",
          location: LocationTypes.Top,
        }),
      }),
      append_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "append icon",
          location: LocationTypes.Top,
        }),
      }),
    }),
    new CheckboxGroupField({
      name: "tester_checkbox",
      cols: 6,
      label: "Checkbox Group Field Test",
      items: [
        new CheckboxField({
          name: "test_checkbox_group_1",
          label: "Testing checkbox group option 1",
        }),
        new CheckboxField({
          name: "test_checkbox_group_2",
          label: "Testing checkbox group option 2",
        }),
        new CheckboxField({
          name: "test_checkbox_group_3",
          label: "Testing checkbox group option 3",
        }),
      ],
    }),
    new CheckboxGroupField({
      cols: 6,
      label: "Checkbox Group Field Test with Switch",
      switch: new SwitchField({
        name: "test_checkbox_group_switch",
        label: "Select / Deselect All",
        color: "success",
      }),
      items: [
        new CheckboxField({
          name: "test_checkbox_group_switch_1",
          label: "Testing checkbox group option 1",
        }),
        new CheckboxField({
          name: "test_checkbox_group_switch_2",
          label: "Testing checkbox group option 2",
        }),
        new CheckboxField({
          name: "test_checkbox_group_switch_3",
          label: "Testing checkbox group option 3",
        }),
      ],
    }),
  ],
  alerts: [
    new Alert({
      trigger: AlertTriggers.BeforeLoad,
      text: "This form is about to load",
    }),
    new Alert({
      trigger: AlertTriggers.Cancelled,
      closable: true,
    }),
    new Alert({
      trigger: AlertTriggers.FormReset,
      closable: true,
    }),
  ],
  buttons: [
    new Button({
      type: ButtonTypes.Process,
      text: "Testing Button",
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-home",
        tooltip: new Tooltip({
          text: "prepend tooltip",
          location: LocationTypes.Bottom,
        }),
      }),
      append_icon: new Icon({
        color: "secondary",
        icon: "mdi-help-box",
        tooltip: new Tooltip({
          text: "append tooltip",
          location: LocationTypes.Bottom,
        }),
      }),
      tooltip: new Tooltip({
        text: "this is helpful",
        location: LocationTypes.Bottom,
      }),
    }),
    new Button({
      type: ButtonTypes.Cancel,
      color: "secondary",
      text: "Cancel",
      tooltip: new Tooltip({
        text: "i like to cancel things",
        location: LocationTypes.Top,
      }),
    }),
    new Button({
      type: ButtonTypes.Reset,
      color: "accent",
      text: "Reset",
      tooltip: new Tooltip({
        text: "i like to reset things",
        location: LocationTypes.Top,
      }),
    }),
  ],
});
</script>
<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Component Testing</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Error Import Form</h2>
        </v-col>
        <form-loader />
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Error Load Form</h2>
        </v-col>
        <form-loader name="TestForm" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Input Form Import Test</h2>
        </v-col>
        <form-loader :form="inputForm" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Action Form Import Test</h2>
        </v-col>
        <form-loader
          :form="
            new ActionForm({
              name: 'TestForm',
              type: 'action',
              inline: true,
              actions: [
                new ActionButton({
                  name: 'test',
                  button: new Button({
                    type: ButtonTypes.Cancel,
                    color: 'secondary',
                    text: 'Cancel',
                  }),
                }),
                new ActionIcon({
                  name: 'test',
                  icon: new Icon({
                    color: 'secondary',
                    icon: 'mdi-alien-outline',
                  }),
                }),
                new ActionIcon({
                  name: 'test',
                  icon: new Icon({
                    color: 'accent',
                    icon: 'mdi-alpha-c-box-outline',
                    tooltip: new Tooltip({
                      text: 'hello C box',
                      location: LocationTypes.Bottom,
                    }),
                  }),
                }),
              ],
            })
          "
        />
      </v-row>
    </v-container>
  </main>
</template>
