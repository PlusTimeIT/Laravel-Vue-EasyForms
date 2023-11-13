<script setup lang="ts">
import { ref, computed, watchEffect, watch, onBeforeUnmount } from "vue";
import { ButtonTypes } from "../../enums";
import { InputForm } from "../../classes/forms";
import { isEmpty } from "../../composables/utils";
import EasyInput from "../../components/fields/EasyInput.vue";
import EasyButton from "../../components/elements/EasyButton.vue";
import { InputFormType } from "../../composables/validation/PropValidation";
import { Button } from "../../classes/elements/Button";
import { FieldType } from "../../types/FieldType";
import { LoaderEvents } from "../../enums";

const props = defineProps({
  form: {
    type: InputForm,
    required: true,
    validator: (value: InputForm) => InputFormType(value),
  },
});

const emit = defineEmits([
  "update:form",
  LoaderEvents.Loading,
  LoaderEvents.Loaded,
  LoaderEvents.Results,
  LoaderEvents.Cancelled,
  LoaderEvents.Updated,
  LoaderEvents.Reset,
  LoaderEvents.Processing,
  LoaderEvents.Failed,
  LoaderEvents.Successful,
]);

const form = ref(props.form);
const formEffectWatcher = watchEffect(() => {
  form.value = props.form;
});

const formWatcher = watch(form.value, (updated) => {
  emit(LoaderEvents.Updated, updated);
});

const formReference = ref(null);

const filteredFields = computed<FieldType[]>({
  get: () =>
    form.value?.fields?.filter((field) => {
      return field.isParentLoaded(getFieldByName(field.depends_on ?? ""));
    }) as FieldType[],
  set: (newValue) => {
    console.log("FILTERED UPDATED", newValue);
  },
});

const formFields = computed<FieldType[]>(() => {
  if (Array.isArray(form.value?.fields)) {
    return form.value?.fields as FieldType[];
  }
  return [];
});

const hasButtons = computed<boolean>(() => {
  return form.value?.buttons?.length > 0;
});

const processEnabled = computed<boolean>(() => {
  return !confirmationValidated.value;
});

const confirmationValidated = computed<boolean>(() => {
  if (!confirmationRequired.value) {
    // if confirmation not required, confirmation validation
    // is set to true.
    return true;
  }
  return !hasInvalidatedFields.value;
});

const confirmationRequired = computed<boolean>(() => {
  return confirmationCount.value > 0;
});

const confirmationCount = computed<number>(() => {
  return fieldsConfirmation.value.length || 0;
});

const fieldsConfirmation = computed<FieldType[]>(() => {
  return (
    (form.value?.fields?.filter(
      (field) => !isEmpty(field.require_confirmation) && field.require_confirmation,
    ) as FieldType[]) || []
  );
});

const hasInvalidatedFields = computed<boolean>(() => {
  return fieldsConfirmation.value.filter((field) => field.validated === false).length > 0 || false;
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
    console.log("PROCESS BUTTON");
    await processForm();
  } else if (button.type === ButtonTypes.Reset) {
    resetForm();
  } else if (button.type === ButtonTypes.Cancel) {
    cancelForm();
  }
}

async function processForm() {
  console.log("PROCESSING FORM");
  emit(LoaderEvents.Processing, true);
  isLoading(true);
  // Handle the process button click logic here
  const validation = await checkValidation();
  if (validation) {
    formReference.value.resetValidation();
    const results = await form.value.process();
    if (!results) {
      emit(LoaderEvents.Failed, true);
      isLoading(false);
      return;
    }
    emit(LoaderEvents.Successful, true);
    if (form.value.axios.expecting_results) {
      emit(LoaderEvents.Results, results);
    }
  } else {
    form.value.failedValidation();
    isLoading(false);
    emit(LoaderEvents.Failed, true);
  }
}

async function checkValidation(): Promise<boolean> {
  const { valid } = await formReference.value.validate();
  return valid;
}

async function updated(field: FieldType) {
  const children: FieldType[] = formFields.value.filter((f) => f.depends_on == field.name) as FieldType[];
  children.forEach(async (child: FieldType) => {
    const fieldData: any = await child.load(form.value as InputForm, field);
    if (fieldData) {
      child.loadItems(fieldData);
    }
  });
  emit(LoaderEvents.Updated, true);
}

function isLoading(loading: boolean) {
  form.value.isLoading(loading);
  emit(LoaderEvents.Loading, loading);
}

function resetForm() {
  formReference.value.resetValidation();
  isLoading(false);
  emit(LoaderEvents.Reset, true);
}

function cancelForm() {
  emit(LoaderEvents.Cancelled, true);
}

onBeforeUnmount(() => {
  formWatcher();
  formEffectWatcher();
});
</script>

<template>
  <v-form v-bind="form?.props() ?? {}" ref="formReference" class="mx-auto w-100">
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
            @updated="updated(field as FieldType)"
            @validated="field.validate"
            @invalidated="field.invalidate"
          />
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
</template>
