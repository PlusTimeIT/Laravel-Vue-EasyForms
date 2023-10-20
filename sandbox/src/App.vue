<template>
  <main>
    <v-container>
      <v-row>
        <v-col> Example Input Form </v-col>
      </v-row>
      <v-row>
        <v-col>
          <form-loader :form="inputForm" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup lang="ts">
import { InputForm } from "../../dist/types/classes/forms";
import { TextField } from "../../dist/types/classes/fields";
import { Button, Icon } from "../../dist/types/classes/elements";
import { ButtonTypes } from "../../dist/types/enums/ButtonTypes";

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
