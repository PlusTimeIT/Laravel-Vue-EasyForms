<script setup lang="ts">
import { InputForm, ActionForm } from "../../dist/forms";
import { TextField } from "../../dist/fields";
import { Button, Icon } from "../../dist/elements";
import { ButtonTypes, FormTypes } from "../../dist/enums";
import { ActionIcon } from "../../dist/actions";
import { Tooltip } from "../../dist/elements";
import { ref } from "vue";
import { Alert } from "../../src/classes/elements";
import { AlertTriggers, AlertTypes } from "../../src/enums";
import { ActionButton } from "../../src/classes/actions";

const inputForm = new InputForm({
  name: "TestInputForm",
  type: FormTypes.Input,
  fields: [
    new TextField({
      name: "test_basic_text_and_label",
      placeholder: "Testing Basic Text and Label",
      label: "Testing Basic Text and Label",
      required: true,
      cols: 12,
    }),
  ],
  buttons: [
    new Button({
      type: ButtonTypes.Process,
      text: "Process",
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-checkmark",
      }),
    }),
  ],
});

interface StoryState {
  inputForm: InputForm;
  actionFormButtonsHorizontal: ActionForm;
  actionFormButtons: ActionForm;
  actionFormIconsHorizontal: ActionForm;
  actionFormIcons: ActionForm;
}

const state = ref<StoryState>({
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
  inputForm: new InputForm({
    name: "TestInputForm",
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
        name: "test_basic_text_and_label",
        placeholder: "Testing Basic Text and Label",
        label: "Testing Basic Text and Label",
        required: true,
        cols: 12,
      }),
    ],
    buttons: [
      new Button({
        type: ButtonTypes.Process,
        text: "Process",
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
        identifier: 'edit',
        callback: 'edit',
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
  <main>
    <v-container>
      <VRow>
        <VCol> Example Input Form </VCol>
      </VRow>
      <VRow>
        <VCol>
          <FormLoader :form="inputForm" />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <FormLoader :form="state.actionFormIcons" :additional-data="[ { key: 'hello', value: 'yes' } ]" />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <div>
            <VCheckbox v-model="state.actionFormIcons.inline" label="Form Inline" />
          </div>
          <div>
            <VColorPicker v-model="(state.actionFormIcons.actions[0] as ActionIcon).icon.color" label="Icon 1 Colour" />
          </div>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <div>
            <pre>{{ state.actionFormIcons }}</pre>
          </div>
        </VCol>
      </VRow>
    </v-container>
  </main>
</template>
