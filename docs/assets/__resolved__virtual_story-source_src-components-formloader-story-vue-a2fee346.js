const __resolved__virtual_storySource_srcComponentsFormloaderStoryVue = `<script setup lang="ts">
import { ActionForm, InputForm } from "../classes/forms";
import { TextField } from "../classes/fields";
import { Alert, Button, Icon, Tooltip } from "../classes/elements";
import { AlertTriggers, AlertTypes, ButtonTypes, FormTypes } from "../enums";
import { ref, computed, watch } from "vue";
import { ActionButton, ActionIcon } from "../classes/actions";

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

const ActionFormIcons = computed<ActionForm>(() => {
  const form = { ...state.value.actionFormIcons };
  console.log("NEW FORM ACTIONS ActionFormIcons", form.actions);
  console.log("NEW FORM ActionFormIcons", form);
  return new ActionForm(form as ActionForm);
});

const ActionFormIconsHorizontal = computed<ActionForm>(() => {
  const form = { ...state.value.actionFormIconsHorizontal };
  console.log("NEW FORM ACTIONS", form.actions);
  console.log("NEW FORM", form);
  return new ActionForm(form as ActionForm);
});

function actionUpdate(event: any, action: ActionIcon, index: number) {
  action.icon.color = event as string;
  console.log("VALUE UPDATED ON STATE", event, action, index);
  console.log(
    "actionFormIconsHorizontal Action",
    (state.value.actionFormIconsHorizontal.actions[index] as ActionIcon).icon,
  );
}

watch(state.value, (value) => {
  console.log("STATE UPDATE", value);
});
<\/script>

<template>
  <Story group="forms" title="Form Loader">
    <Variant title="Input Form">
      <form-loader :form="state.inputForm as InputForm" />
    </Variant>
    <Variant title="Action Form - Buttons Vertical">
      <form-loader :form="state.actionFormButtons as ActionForm" />
    </Variant>
    <Variant title="Action Form - Buttons Horizontal">
      <form-loader :form="state.actionFormButtonsHorizontal as ActionForm" />
    </Variant>
    <Variant title="Action Form - Icons Vertical">
      <template #controls>
        <div>
          <HstSelect
            v-model="state.actionFormIcons.inline"
            title="Inline Form"
            :options="[
              {
                label: 'True',
                value: true,
              },
              {
                label: 'False',
                value: false,
              },
            ]"
          >
          </HstSelect>
        </div>
      </template>
      <form-loader :form="ActionFormIcons as ActionForm" />
      <div>
        Form:
        <br />
        {{ ActionFormIcons }}
      </div>
    </Variant>

    <Variant title="Action Form - Icons Horizontal">
      <template #controls>
        <div>
          <HstSelect
            v-model="state.actionFormIconsHorizontal.inline"
            title="Inline Form"
            :options="[
              {
                label: 'True',
                value: true,
              },
              {
                label: 'False',
                value: false,
              },
            ]"
          >
          </HstSelect>
        </div>
        <div v-for="(actionIcon, i) in ActionFormIconsHorizontal.actions" :key="i">
          {{ i }} - {{ (state.actionFormIconsHorizontal.actions[i] as ActionIcon).icon }}
          <HstColorSelect
            :model-value="(actionIcon as ActionIcon).icon.color"
            @update:model-value="actionUpdate($event, actionIcon as ActionIcon, i)"
            :title="actionIcon.name + ' icon color'"
          >
          </HstColorSelect>
        </div>
      </template>
      <form-loader :form="ActionFormIconsHorizontal as ActionForm" />
      <div>
        Form:
        <br />
        {{ ActionFormIconsHorizontal }}
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsFormloaderStoryVue as default
};
