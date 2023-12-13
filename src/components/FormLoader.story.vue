<script setup lang="ts">
import { ActionForm, InputForm } from "../classes/forms";
import {
  ColorPicker,
  ColorPickerField,
  DatePickerField,
  RadioField,
  RadioGroupField,
  TextareaField,
  TextField,
  TimePickerField,
} from "../classes/fields";
import { Alert, Button, Icon, Tooltip } from "../classes/elements";
import { AlertTriggers, AlertTypes, ButtonTypes, ColorPickerModeTypes, FormTypes } from "../enums";
import { ref } from "vue";
import { ActionButton, ActionIcon } from "../classes/actions";

interface StoryState {
  inputFormBasic: InputForm;
  inputFormAdvanced: InputForm;
  actionFormButtonsHorizontal: ActionForm;
  actionFormButtons: ActionForm;
  actionFormIconsHorizontal: ActionForm;
  actionFormIcons: ActionForm;
}

const state = ref<StoryState>({
  inputFormBasic: new InputForm({
    name: "BasicInputForm",
    type: FormTypes.Input,
    alerts: [
      new Alert({
        type: AlertTypes.Info,
        trigger: AlertTriggers.AfterLoad,
        text: "These forms are only test forms with no processing.",
      }),
    ],
    fields: [
      new TextField({
        name: "username",
        placeholder: "Enter your username",
        label: "Username",
        required: true,
        cols: 12,
      }),
      new TextField({
        name: "first_name",
        placeholder: "Enter your first name",
        label: "First Name",
        required: true,
        cols: 6,
      }),
      new TextField({
        name: "last_name",
        placeholder: "Enter your last name",
        label: "Last Name",
        required: true,
        cols: 6,
      }),
    ],
    buttons: [
      new Button({
        type: ButtonTypes.Process,
        text: "Process",
      }),
      new Button({
        type: ButtonTypes.Cancel,
        text: "Cancel",
        color: "red",
      }),
    ],
  }),
  inputFormAdvanced: new InputForm({
    name: "AdvancedInputForm",
    type: FormTypes.Input,
    alerts: [
      new Alert({
        type: AlertTypes.Info,
        trigger: AlertTriggers.AfterLoad,
        text: "These forms are only test forms with no processing.",
      }),
    ],
    fields: [
      new ColorPickerField({
        name: "favourite_colour",
        placeholder: "Select Favourite Colour",
        label: "Favourite Color",
        picker: new ColorPicker({
          mode: ColorPickerModeTypes.Hex,
        }),
        required: true,
        cols: 12,
      }),
      new DatePickerField({
        name: "selected_date",
        placeholder: "Select a Date",
        label: "Booking Date",
        required: true,
      }),
      new TimePickerField({
        name: "selected_time",
        placeholder: "Select a Time",
        label: "Booking Time",
        required: true,
      }),
      new TextareaField({
        name: "messages",
        placeholder: "Enter your message",
        label: "Your Message",
        required: true,
        rows: 8,
      }),
      new RadioGroupField({
        name: "selected_colour",
        label: "Choose your colour",
        items: [
          new RadioField({
            label: "Blue",
            value: "blue",
            color: "blue",
          }),
          new RadioField({
            label: "Red",
            value: "red",
            color: "red",
          }),
          new RadioField({
            label: "Green",
            value: "green",
            color: "green",
          }),
        ],
      }),
    ],
    buttons: [
      new Button({
        type: ButtonTypes.Process,
        text: "Process",
      }),
      new Button({
        type: ButtonTypes.Cancel,
        text: "Cancel",
        color: "red",
      }),
    ],
  }),
  actionFormIconsHorizontal: new ActionForm({
    name: "ActionFormIconsHorizontal",
    type: FormTypes.Action,
    inline: true,
    actions: [
      new ActionIcon({
        name: "edit",
        icon: new Icon({
          icon: "mdi-pencil",
          color: "#7c00ec",
          classes: "pa-6",
          tooltip: new Tooltip({
            text: "Edit User",
          }),
        }),
      }),
      new ActionIcon({
        name: "deactivate",
        icon: new Icon({
          icon: "mdi-cancel",
          color: "#0e9f1d",
          classes: "pa-6",
          tooltip: new Tooltip({
            text: "Deactivate User",
          }),
        }),
      }),
      new ActionIcon({
        name: "delete",
        icon: new Icon({
          icon: "mdi-delete",
          color: "#d00e30",
          classes: "pa-6",
          tooltip: new Tooltip({
            text: "Delete User",
          }),
        }),
      }),
    ],
  }),
  actionFormButtonsHorizontal: new ActionForm({
    name: "ActionFormButtonsHorizontal",
    type: FormTypes.Action,
    inline: true,
    actions: [
      new ActionButton({
        button: new Button({
          color: "#7c00ec",
          text: "Edit User",
          classes: "ma-6",
        }),
      }),
      new ActionButton({
        button: new Button({
          color: "#0e9f1d",
          text: "Deactivate User",
          classes: "ma-6",
        }),
      }),
      new ActionButton({
        button: new Button({
          color: "#d00e30",
          text: "Delete User",
          classes: "ma-6",
        }),
      }),
    ],
  }),
  actionFormButtons: new ActionForm({
    name: "ActionFormButtons",
    type: FormTypes.Action,
    actions: [
      new ActionButton({
        button: new Button({
          color: "#7c00ec",
          text: "Edit User",
          classes: "ma-6",
        }),
      }),
      new ActionButton({
        button: new Button({
          color: "#0e9f1d",
          text: "Deactivate User",
          classes: "ma-6",
        }),
      }),
      new ActionButton({
        button: new Button({
          color: "#d00e30",
          text: "Delete User",
          classes: "ma-6",
        }),
      }),
    ],
  }),
  actionFormIcons: new ActionForm({
    name: "ActionFormIconsVertical",
    type: FormTypes.Action,
    inline: false,
    actions: [
      new ActionIcon({
        name: "edit",
        icon: new Icon({
          icon: "mdi-pencil",
          color: "#7c00ec",
          classes: "pa-6",
          tooltip: new Tooltip({
            text: "Edit User",
          }),
        }),
      }),
      new ActionIcon({
        name: "deactivate",
        icon: new Icon({
          icon: "mdi-cancel",
          color: "#0e9f1d",
          classes: "pa-6",
          tooltip: new Tooltip({
            text: "Deactivate User",
          }),
        }),
      }),
      new ActionIcon({
        name: "delete",
        icon: new Icon({
          icon: "mdi-delete",
          color: "#d00e30",
          classes: "pa-6",
          tooltip: new Tooltip({
            text: "Delete User",
          }),
        }),
      }),
    ],
  }),
});
</script>

<template>
  <Story group="forms" title="Form Loader">
    <Variant title="Input Form - Basic">
      <h2>Input Form - Basic</h2>
      <v-sheet class="pa-4" color="grey-lighten-3">
        <form-loader :form="state.inputFormBasic as InputForm" />
      </v-sheet>
    </Variant>
    <Variant title="Input Form - Advanced">
      <h2>Input Form - Advanced</h2>
      <v-sheet class="pa-4" color="grey-lighten-3">
        <form-loader :form="state.inputFormAdvanced as InputForm" />
      </v-sheet>
    </Variant>
    <Variant title="Action Form - Buttons Vertical">
      <h2>Action Form - Buttons Vertical</h2>
      <v-sheet class="pa-4" color="grey-lighten-3">
        <form-loader :form="state.actionFormButtons as ActionForm" />
      </v-sheet>
    </Variant>
    <Variant title="Action Form - Buttons Horizontal">
      <h2>Action Form - Buttons Horizontal</h2>
      <v-sheet class="pa-4" color="grey-lighten-3">
        <form-loader :form="state.actionFormButtonsHorizontal as ActionForm" />
      </v-sheet>
    </Variant>
    <Variant title="Action Form - Icons Vertical" :auto-props-disabled="true">
      <h2>Action Form - Icons Vertical</h2>
      <v-sheet class="pa-4" color="grey-lighten-3">
        <form-loader :form="state.actionFormIcons as ActionForm" />
      </v-sheet>
    </Variant>

    <Variant title="Action Form - Icons Horizontal">
      <h2>Action Form - Icons Horizontal</h2>
      <v-sheet class="pa-4" color="grey-lighten-3">
        <form-loader :form="state.actionFormIconsHorizontal as ActionForm" />
      </v-sheet>
    </Variant>
  </Story>
</template>
