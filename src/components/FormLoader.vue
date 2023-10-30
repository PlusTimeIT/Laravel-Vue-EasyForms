<script setup lang="ts">
/**
 * @component FormLoader
 * @description This is a Vue 3 component for loading and rendering forms.
 */
import { onMounted, ref, computed, watch, onBeforeMount } from "vue";
import { ColumnRestriction } from "../composables/validation/PropValidation";
import { ActionForm, InputForm, EasyForm } from "../classes/forms";
import { AdditionalData } from "../classes/properties";
import { isEmpty } from "../composables/utils";
import { Alert, FormContainer } from "../classes/elements";
import { LoaderEvents } from "../enums";
import { FormTypes } from "../enums";
import { store } from "../composables/utils";
import { AlertTriggers } from "../enums/AlertTriggers";

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

const loading = ref<boolean>(true);
const loaded = ref<boolean>(false);
// loaded as easy form incase name is passed or error on form
const loaded_form = ref<InputForm | ActionForm | EasyForm>(new EasyForm());
const container = computed<FormContainer>(() => {
  return new FormContainer({
    cols: props.cols,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
  });
});
const display_alerts = computed<Alert[]>(() => loaded_form?.value?.alerts?.filter((alert) => alert.display));
const has_alerts = computed<boolean>(() => (display_alerts.value.length ?? 0) > 0);
const form_ready = computed<boolean>(() => {
  return (
    (loaded.value &&
      !loaded_form.value.loading &&
      loaded_form.value.type !== "" &&
      loaded_form.value instanceof InputForm) ||
    loaded_form.value instanceof ActionForm ||
    loaded_form.value.type == "error-form"
  );
});

const form_component = computed<string | undefined>(() => {
  if (loaded.value || !loading.value || !isEmpty(loaded_form.value)) {
    loaded_form.value!.text = "";
    if (loaded_form.value instanceof InputForm) {
      return FormTypes.Input;
    }

    if (loaded_form.value instanceof ActionForm) {
      return FormTypes.Action;
    }
  }
  loaded_form.value!.text = "Error Loading Form - Unknown Component";
  isLoading(false);
  return FormTypes.Error;
});

function reset() {
  emit(LoaderEvents.Reset, true);
  loaded_form.value?.reset();
}

function cancel() {
  emit(LoaderEvents.Cancelled, true);
  loaded_form.value?.cancelled();
}

function processing(processing: boolean) {
  emit(LoaderEvents.Processing, processing);
}

function failed() {
  emit(LoaderEvents.Failed, true);
}

function updated(form: InputForm | ActionForm) {
  emit(LoaderEvents.Updated, form);
}

function success() {
  emit(LoaderEvents.Successful, true);
}

function results(data: any) {
  loaded_form.value.hasResults(data);
  emit(LoaderEvents.Results, data);
}

function isLoading(load: boolean) {
  emit(LoaderEvents.Loading, load);
  // if loading false
  loaded_form.value.isLoading(load);
  loading.value = load;
  if (!loaded.value) {
    loaded.value = !load;
  }
}

watch(loaded, (hasLoaded) => {
  emit(LoaderEvents.Loaded, hasLoaded);
});

onBeforeMount(async () => {
  console.log("fetching token....");
  store.csrf.fetchNewToken();
});

onMounted(async () => {
  loaded_form.value.text = "";
  isLoading(true);
  // check if form preloaded
  if (!isEmpty(props.form) && isEmpty(props.name)) {
    // form is loaded...
    if (props.form instanceof InputForm || props.form instanceof ActionForm) {
      loaded_form.value = props.form;
      isLoading(false);
      return;
    }
  } else if (!isEmpty(props.name)) {
    // make API call to load form.
    loaded_form.value = new EasyForm({
      name: props.name,
      additional_data: props.additionalData,
      additional_load_data: props.additionalLoadData,
    });

    const results: any = await loaded_form.value.load();
    if (!results) {
      loaded_form.value.text = "Error Loading Form - Not Found";
      isLoading(false);
      return;
    }
    if (results?.type == FormTypes.Input) {
      loaded_form.value = new InputForm(results);
      loaded_form.value.triggerAlert(AlertTriggers.AfterLoad);
      isLoading(false);
      return;
    } else if (results.type == FormTypes.Action) {
      loaded_form.value = new ActionForm(results);
      isLoading(false);
      return;
    }
  }

  loaded_form.value.text = "Error Loading Form - Unknown Component";
  isLoading(false);
});
</script>
<template>
  <v-col :cols="container.cols" :sm="container.sm" :md="container.md" :lg="container.lg">
    <v-row v-if="has_alerts">
      <v-col v-for="(alert, index) in display_alerts" :key="index" :cols="alert.cols">
        <v-alert v-model="alert.display" v-bind="alert.props()" />
      </v-col>
    </v-row>
    <v-row v-show="!form_ready">
      <v-col class="mx-auto text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-show="form_ready">
      <input-form-loader
        v-if="form_component == FormTypes.Input"
        v-model:form="loaded_form"
        v-bind="loaded_form!.props()"
        @results="results"
        @loading="isLoading"
        @reset="reset"
        @updated="updated"
        @cancelled="cancel"
        @processing="processing"
        @failed="failed"
        @successful="success"
      />
      <action-form-loader
        v-else-if="form_component == FormTypes.Action"
        v-model:form="loaded_form"
        v-bind="loaded_form!.props()"
        @results="results"
        @loading="isLoading"
        @reset="reset"
        @updated="updated"
        @cancelled="cancel"
        @processing="processing"
        @failed="failed"
        @successful="success"
      />
      <error-form-loader v-else-if="form_component == FormTypes.Error" :text="loaded_form.text" />
    </v-row>
  </v-col>
</template>
