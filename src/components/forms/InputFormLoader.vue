<script setup lang="ts">
import { ref, computed, watchEffect, watch, onBeforeUnmount } from "vue";
import { useV3Recaptcha } from "v3-recaptcha";
import { ButtonTypes, LoaderEvents } from "../../enums";
import { Button } from "../../classes/elements";
import { InputForm } from "../../classes/forms";
import { SelectField, AutoCompleteField } from "../../classes/fields";
import { isEmpty } from "../../composables/utils";
import { EasyInput } from "../../components/fields";
import { InputFormType } from "../../composables/validation/PropValidation";
import { FieldType } from "../../types";
import { VForm } from "vuetify/components";
import { onMounted } from "vue";

const props = defineProps({
  form: {
    type: InputForm,
    required: true,
    validator: (value: InputForm) => InputFormType(value),
  },
});

const emit = defineEmits(["update:form", ...Object.values(LoaderEvents)]);
const loadedForm = ref(props.form);
const { recaptchaIsLoaded, hasRecaptcha, loadRecaptcha, getToken } = useV3Recaptcha(
  loadedForm.value.google_recaptcha_site_key,
);
const formReference = ref(VForm);

const filteredFields = computed<FieldType[]>(() => {
  return loadedForm.value?.fields?.filter((field) => {
    return field.isParentPopulated(getFieldByName(field.depends_on ?? ""));
  }) as FieldType[];
});

const formFields = computed<FieldType[]>(() => {
  if (Array.isArray(loadedForm.value?.fields)) {
    return loadedForm.value?.fields as FieldType[];
  }
  return [];
});

const hasButtons = computed<boolean>(() => {
  return loadedForm.value?.buttons?.length > 0;
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
    (loadedForm.value?.fields?.filter(
      (field) => !isEmpty(field.require_confirmation) && field.require_confirmation,
    ) as FieldType[]) || []
  );
});

const hasInvalidatedFields = computed<boolean>(() => {
  return fieldsConfirmation.value.filter((field) => !field.validated).length > 0 || false;
});

function getFieldByName(name: string) {
  return loadedForm.value?.fields.find((field) => field.name === name);
}

function isButtonDisabled(button: Button) {
  if (button.type === ButtonTypes.Process) {
    return hasRecaptcha.value ? (recaptchaIsLoaded.value ? processEnabled.value : true) : processEnabled.value;
  }
  return button.disabled;
}

async function handleButtonClick(button: Button) {
  if (button.type === ButtonTypes.Process) {
    await processForm();
  } else if (button.type === ButtonTypes.Reset) {
    resetForm();
  } else if (button.type === ButtonTypes.Cancel) {
    cancelForm();
  }
}

async function processForm() {
  emit(LoaderEvents.Processing, true);
  isLoading(true);
  // Handle the process button click logic here
  const validation = await checkValidation();
  if (validation) {
    emit(LoaderEvents.Validated, true);
    formReference.value.resetValidation();
    const token = await getToken(`process_form_${loadedForm.value.name.replace("\\", "_").toLowerCase()}`);
    const results = await loadedForm.value.process(token);
    processResults(results);
  } else {
    emit(LoaderEvents.Validated, false);
    loadedForm.value.failedValidation();
    isLoading(false);
    emit(LoaderEvents.Failed, true);
  }
}

function processResults(results: any) {
  if (!results) {
    emit(LoaderEvents.Failed, true);
    isLoading(false);
    return;
  }
  emit(LoaderEvents.Successful, true);
  if (loadedForm.value.axios.expecting_results) {
    emit(LoaderEvents.Results, results);
  }
}

async function checkValidation(): Promise<boolean> {
  const { valid } = await formReference.value.validate();
  return valid;
}

async function updated(field: FieldType) {
  const children: FieldType[] = formFields.value.filter((f) => f.depends_on === field.name) as FieldType[];
  for (const child of children) {
    const fieldData: object | boolean = await child.load(loadedForm.value as InputForm, field);
    if (fieldData && (child instanceof SelectField || child instanceof AutoCompleteField)) {
      child.loadItems(fieldData);
    }
  }
  emit(LoaderEvents.Updated, true);
}

function isLoading(loading: boolean) {
  loadedForm.value.isLoading(loading);
  emit(LoaderEvents.Loading, loading);
}

function resetForm() {
  formReference.value!.resetValidation();
  isLoading(false);
  emit(LoaderEvents.Reset, true);
}

function cancelForm() {
  emit(LoaderEvents.Cancelled, true);
}

const formEffectWatcher = watchEffect(() => {
  loadedForm.value = props.form;
});

const formWatcher = watch(loadedForm.value, (updated) => {
  emit(LoaderEvents.Updated, updated);
});

onMounted(() => {
  loadRecaptcha();
});

onBeforeUnmount(() => {
  formWatcher();
  formEffectWatcher();
});
</script>

<template>
  <VForm v-bind="loadedForm?.props() ?? {}" ref="formReference" class="mx-auto w-100">
    <VCol cols="12">
      <VRow class="easy-fields">
        <VCol
          v-for="(field, index_f) in filteredFields"
          :cols="field.cols?.toString() ?? '12'"
          :offset="field.offset"
          :key="index_f"
        >
          <EasyInput
            v-model:field="filteredFields[index_f]"
            :fields="formFields"
            @updated="updated(field as FieldType)"
            @validated="field.validate"
            @invalidated="field.invalidate"
          />
        </VCol>
      </VRow>
      <VRow
        v-if="hasButtons"
        :align="loadedForm.button_align_row"
        :justify="loadedForm.button_justify_row"
        class="easy-buttons"
      >
        <VCol cols="auto" v-for="(button, index) in loadedForm?.buttons" :key="index">
          <EasyButton
            :button="button"
            :identifier="index"
            :disabled="isButtonDisabled(button)"
            @click="handleButtonClick(button)"
          ></EasyButton>
        </VCol>
      </VRow>
    </VCol>
  </VForm>
</template>
