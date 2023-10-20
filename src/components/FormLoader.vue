<script setup lang="ts">
/**
 * @component FormLoader
 * @description This is a Vue 3 component for loading and rendering forms.
 * @props
 *   - {ActionForm | InputForm} form - The form to be loaded.
 *   - {string} name - The name of the form to be loaded if `form` is not provided.
 *   - {number} cols - The number of columns for layout (default: 12).
 *   - {number} sm - The number of columns for small screens (default: 12).
 *   - {number} md - The number of columns for medium screens (default: 12).
 *   - {number} lg - The number of columns for large screens (default: 12).
 *   - {boolean} populate - Whether to populate the form with data (default: false).
 *   - {AdditionalData} additional_data - Additional data for form loading (default: new AdditionalData()).
 *   - {AdditionalData} additional_load_data - Additional data for form loading (default: new AdditionalData()).
 * @emits
 *   - loading(value: boolean) - Emits when loading state changes.
 *   - loaded(value: boolean) - Emits when the form is fully loaded.
 *   - results(value: any) - Emits when the form has results.
 *   - cancelled(value: boolean) - Emits when the form is cancelled.
 *   - updated(value: any) - Emits when the form is updated.
 *   - reset_form(value: boolean) - Emits when the form is reset.
 */
import { ComputedRef, Ref, onMounted, ref, computed, watch } from "vue";
import { ColumnRestriction } from "../composables/validation/PropValidation";
import { ActionForm, InputForm, EasyForm } from "../classes/forms";
import { AdditionalData } from "../classes/properties";
import { isEmpty } from "../composables/utils/Types";
import { FormContainer } from "../classes/elements";
import { LoaderEvents } from "../enums";
import { FormTypes } from "../enums";

const emit = defineEmits<{
  (e: "loading", value: boolean): void;
  (e: "loaded", value: boolean): void;
  (e: "results", value: any): void;
  (e: "cancelled", value: boolean): void;
  (e: "updated", value: any): void;
  (e: "reset_form", value: boolean): void;
}>();

const props = defineProps({
  form: {
    type: [ActionForm, InputForm, EasyForm],
    default: new EasyForm(),
  },
  name: {
    type: String,
    default: "",
  },
  cols: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  sm: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  md: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  lg: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  populate: {
    type: Boolean,
    default: false,
  },
  additionalData: {
    type: AdditionalData,
    default: new AdditionalData(),
  },
  additionalLoadData: {
    type: AdditionalData,
    default: new AdditionalData(),
  },
});

const loading: Ref<boolean> = ref(true);
const loaded: Ref<boolean> = ref(false);
// loaded as easy form incase name is passed or error on form
const loadedForm: Ref<InputForm | ActionForm | EasyForm> = ref(new EasyForm()) as Ref<
  InputForm | ActionForm | EasyForm
>;
const container: ComputedRef<FormContainer> = computed(() => {
  return new FormContainer({
    cols: props.cols,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
  });
});

const has_alerts: ComputedRef<boolean> = computed(() => (loadedForm?.value?.alerts?.length ?? 0) > 0);

const form_component: ComputedRef<string | undefined> = computed(() => {
  if (loaded.value || !loading.value || !isEmpty(loadedForm.value)) {
    loadedForm.value!.text = "";
    if (loadedForm.value instanceof InputForm) {
      return FormTypes.Input;
    }

    if (loadedForm.value instanceof ActionForm) {
      return FormTypes.Action;
    }
  }
  loadedForm.value!.text = "Error Loading Form - Unknown Component";
  isLoading(false);
  return FormTypes.Error;
});

function reset() {
  emit(LoaderEvents.ResetForm, true);
  loadedForm.value?.reset();
}

function cancel() {
  emit(LoaderEvents.Cancelled, true);
  loadedForm.value?.cancelled();
}

function isLoading(load: boolean) {
  emit(LoaderEvents.Loading, load);
  // if loading false
  loadedForm.value.isLoading(load);
  loading.value = load;
  loaded.value = !load;
}

watch(loaded, (hasLoaded) => {
  emit(LoaderEvents.Loaded, hasLoaded);
});

onMounted(async () => {
  loadedForm.value.text = "";
  isLoading(true);
  // check if form preloaded
  if (!isEmpty(props.form)) {
    // form is loaded...
    if (props.form instanceof InputForm || props.form instanceof ActionForm) {
      loadedForm.value = props.form;
      isLoading(false);
      return;
    }
  } else if (!isEmpty(props.name)) {
    // make API call to load form.
    loadedForm.value = new EasyForm({
      name: props.name,
      additional_data: props.additionalData,
      additional_load_data: props.additionalLoadData,
    });

    const results: any = await loadedForm.value.load();
    if (!results) {
      loadedForm.value.text = "Error Loading Form - Not Found";
      isLoading(false);
      return;
    }
    if (results?.type == FormTypes.Input) {
      loadedForm.value = new InputForm(results as object);
      isLoading(false);
      return;
    } else if (results.type == FormTypes.Action) {
      loadedForm.value = new ActionForm(results as object);
      isLoading(false);
      return;
    }
  }

  loadedForm.value.text = "Error Loading Form - Unknown Component";
  isLoading(false);
});
</script>
<template>
  <v-col :cols="container.cols" :sm="container.sm" :md="container.md" :lg="container.lg">
    <v-row v-if="has_alerts">
      <v-col v-for="(alert, index) in form?.alerts" :key="index" :cols="alert.cols">
        <v-alert v-model="alert.display" v-bind="alert.props()" />
      </v-col>
    </v-row>
    <v-row v-if="!loaded && !form.loading">
      <v-col class="mx-auto text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else>
      <component
        :is="form_component ?? ''"
        v-model:form="(form as InputForm)"
        v-bind="form!.props()"
        @results="form?.hasResults"
        @loading="isLoading"
        @reset="reset"
        @cancelled="cancel"
        @processing="form?.processing"
        @failed="form?.failed"
        @successful="form?.success"
      />
    </v-row>
  </v-col>
</template>
