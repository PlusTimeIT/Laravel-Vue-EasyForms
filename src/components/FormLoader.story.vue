<script setup lang="ts">
import FormLoader from "./FormLoader.vue";
import { InputForm } from "#/classes/forms/InputForm";
import { TextField } from "#/classes/fields/TextField";
import { Button, Icon } from "#/classes/elements";
import { ButtonTypes } from "#/enums";

const inputForm = new InputForm({
  name: "TestInputForm",
  type: "input",
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
</script>

<template>
  <Story group="forms" title="Form Loader">
    <Variant title="All Options">
      <form-loader :form="inputForm" />
    </Variant>
    <Variant title="Input Form">
      <form-loader :form="inputForm" />
    </Variant>
  </Story>
</template>
