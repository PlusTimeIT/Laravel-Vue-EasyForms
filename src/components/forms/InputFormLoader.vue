<script setup lang="ts">
import { ref, computed, watchEffect, watch, onBeforeUnmount } from "vue";
import { ButtonTypes, LoaderEvents } from "../../enums";
import { Button } from "../../classes/elements";
import { InputForm } from "../../classes/forms";
import { SelectField, AutoCompleteField } from "../../classes/fields";
import { isEmpty } from "../../composables/utils";
import { EasyInput } from "../../components/fields";
import { InputFormType } from "../../composables/validation/PropValidation";
import { isRecaptchaLoaded, loadRecaptcha } from "../../composables/Recaptcha";
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
const formReference = ref(VForm);
const hasRecaptcha = computed<boolean>(() => !isEmpty(loadedForm.value.google_recaptcha_site_key));

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
    return hasRecaptcha.value ? (isRecaptchaLoaded.value ? processEnabled.value : true) : processEnabled.value;
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
    const win = window as any;
    let results: any;
    console.log("captcha step 1");
    if (hasRecaptcha.value && win.grecaptcha) {
      console.log("captcha step 2");
      win.grecaptcha.ready(async function () {
        console.log("captcha step 3");
        win.grecaptcha
          .execute(loadedForm.value.google_recaptcha_site_key, {
            action: `process_form_${loadedForm.value.name.replace("\\", "_")}`,
          })
          .then(async function (token: any) {
            console.log("captcha step 4");
            results = await loadedForm.value.process(token);
            processResults(results);
            console.log("captcha results processed");
          });
      });
    } else {
      results = await loadedForm.value.process();
      processResults(results);
      console.log("normal results processed");
    }
  } else {
    console.log("validation failed", validation);
    emit(LoaderEvents.Validated, false);
    loadedForm.value.failedValidation();
    isLoading(false);
    emit(LoaderEvents.Failed, true);
  }
}

function processResults(results: any) {
  console.log("results", results);
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
  console.log("loadedForm.value", loadedForm.value);
  console.log("hasRecaptcha.value", hasRecaptcha.value);
  if (hasRecaptcha.value) {
    console.log("LOADING RECAPTCHA");
    loadRecaptcha(loadedForm.value.google_recaptcha_site_key as string);
  }
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
            v-model:field="(filteredFields[index_f] as FieldType)"
            :fields="(formFields as FieldType[])"
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
