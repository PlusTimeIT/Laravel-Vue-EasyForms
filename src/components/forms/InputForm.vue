<template>
  <v-row>
    <v-form v-bind="form?.props() ?? {}" :ref="reference" :key="key" class="mx-auto w-100">
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="(field, index_f) in filteredFields"
            :cols="field.cols?.toString() ?? '12'"
            :offset="field.offset"
            :key="index_f"
          >
            <easy-input
              v-model:field="(filteredFields[index_f] as FieldType)"
              :fields="(formFields as FieldType[])"
              @validated="field.validate"
              @invalidated="field.invalidate"
            />
            <br />
            Value: {{ field.value }} <br />
          </v-col>
        </v-row>
        <v-row v-if="hasButtons" :align="form.button_align_row" :justify="form.button_justify_row">
          <v-col cols="auto" v-for="(button, index) in form?.buttons" :key="index">
            <easy-button
              :button="button"
              :identifier="index"
              :disabled="isButtonDisabled(button)"
              @click="handleButtonClick(button)"
            ></easy-button>
          </v-col>
        </v-row>
      </v-col>
    </v-form>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { ButtonTypes } from "#/enums"; // Import ButtonTypes here
import { InputForm } from "#/classes/forms"; // Import InputForm here
import { generate } from "#/composables/utils/Strings"; // Import generate from utils
import { isEmpty } from "#/composables/utils/Types";
import EasyInput from "#/components/fields/EasyInput.vue";
import EasyButton from "#/components/elements/EasyButton.vue";
import { InputFormType } from "#/composables/validation/PropValidation";
import { Button } from "../../classes/elements/Button";
import { FieldType } from "../../types/FieldType";

/**
 * InputFormProps represents the props for the InputForm component.
 *
 * @interface InputFormProps
 */
interface InputFormProps {
  form: InputForm;
}

const props: InputFormProps = defineProps({
  form: {
    type: InputForm,
    required: true,
    validator: (value: InputForm) => InputFormType(value),
  },
});
const emit = defineEmits(["update:form", "loading", "loaded", "results", "cancelled", "updated", "reset_form"]);

const form = ref(props.form);
watchEffect(() => {
  form.value = props.form;
});

const key = ref("lvef-" + generate(10)); // Use generate from utils for key
const reference = ref(key.value);

// const filteredFields = computed(() => {
//   return form.value?.fields?.filter((field) => {
//     return field.isParentLoaded(getFieldByName(field.depends_on ?? ''));
//   }) || [];
// });

const filteredFields = computed({
  get: () =>
    form.value?.fields?.filter((field) => {
      return field.isParentLoaded(getFieldByName(field.depends_on ?? ""));
    }) || [],
  set: (newValue) => {
    console.log("FILTERED UPDATED", newValue);
    // textfield.value.value = newValue;
    // // Update the color of the inner icon
    // textfield.value!.prepend_inner_icon!.color = newValue;
    // emit("updated:modelValue", textfield.value);
  },
});

const formFields = computed(() => {
  return form.value?.fields || [];
});

const hasButtons = computed(() => {
  return form.value?.buttons?.length > 0;
});

function getFieldByName(name: string) {
  return form.value?.fields.find((field) => field.name === name);
}

function isButtonDisabled(button: Button) {
  if (button.type === ButtonTypes.Process) {
    return processEnabled.value;
  }
  return button.disabled;
}

async function handleButtonClick(button: Button) {
  if (button.type === ButtonTypes.Process) {
    form.value.isLoading(true);
    // Handle the process button click logic here
  } else if (button.type === ButtonTypes.Reset) {
    resetForm();
  } else if (button.type === ButtonTypes.Cancel) {
    cancelForm();
  }
}

function resetForm() {
  form.value = form.value?.reset();
  emit("reset_form", true);
}

function cancelForm() {
  emit("cancelled", true);
}

const processEnabled = computed(() => {
  return !confirmationValidated.value;
});

const confirmationValidated = computed(() => {
  if (!confirmationRequired.value) {
    // if confirmation not required, confirmation validation
    // is set to true.
    return true;
  }
  return !hasInvalidatedFields.value;
});

const confirmationRequired = computed(() => {
  return confirmationCount.value > 0;
});

const confirmationCount = computed(() => {
  return fieldsConfirmation.value.length || 0;
});

const fieldsConfirmation = computed(() => {
  return (
    form.value?.fields?.filter((field) => !isEmpty(field.require_confirmation) && field.require_confirmation) || []
  );
});

const hasInvalidatedFields = computed(() => {
  return fieldsConfirmation.value.filter((field) => field.validated === false).length > 0 || false;
});
</script>
