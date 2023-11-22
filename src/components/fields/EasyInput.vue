<script setup lang="ts">
import { ref, computed, onMounted, Ref, watchEffect, reactive, onBeforeUnmount } from "vue"; // Import necessary Vue Composition API functions
import { isEmpty } from "../../composables/utils";
import type { FieldType } from "../../types";
import { TextField } from "../../classes/fields"; // Import TextField here
import type { Masking } from "../../types";
import EasyIcon from "../../components/elements/EasyIcon.vue";
// Default masking options
const MASKING_DEFAULTS: Masking = {
  mask: "",
  eager: true,
};

// Access component props using defineProps
const props = defineProps<{
  field: FieldType;
  fields: FieldType[];
  cols?: number;
}>();

// Define emitted events using defineEmits
const emit = defineEmits([
  "updated",
  "validated",
  "focus",
  "blur",
  "invalidated",
  "click:clear",
  "click:prepend",
  "click:prependInner",
  "click:append",
  "click:appendInner",
]);

// Create a ref for the field
const field: Ref<FieldType> = ref(props.field) as Ref<FieldType>;
const fieldWatcher = watchEffect(() => (field.value = props.field));
// Create a ref for masking options, including default mask if it's a TextField
const maskingOptions = reactive({
  ...MASKING_DEFAULTS,
  mask: props?.field instanceof TextField ? props.field?.masking : "",
});

// Compute validation rules for the field
const rules = computed(() => field?.value?.validationRules());

// Compute whether the field has a prepend icon
const hasPrependIcon = computed(() => !isEmpty(props.field?.prepend_icon) && !isEmpty(props.field?.prepend_icon?.icon));

// Compute whether the field has an append icon
const hasAppendIcon = computed(() => !isEmpty(props.field?.append_icon) && !isEmpty(props.field?.append_icon?.icon));

// Compute whether the field has a clear icon
const hasClearIcon = computed(() => !isEmpty(props.field?.clear_icon) && !isEmpty(props.field?.clear_icon?.icon));

// Compute whether the field has a prepend inner icon
const hasPrependInnerIcon = computed(
  () => !isEmpty(props.field?.prepend_inner_icon) && !isEmpty(props.field?.prepend_inner_icon?.icon),
);

// Compute whether the field has an append inner icon
const hasAppendInnerIcon = computed(
  () => !isEmpty(props.field?.append_inner_icon) && !isEmpty(props.field?.append_inner_icon?.icon),
);

// Compute whether to show the field based on its type and loading status
const showField = computed(() => {
  if (isEmpty(props?.field?.component)) return false;
  if (props?.field?.type === "hidden") return false;
  if (props?.field?.loading) return false;
  return true;
});

// Function to emit 'updated' event and update the field value
function updated() {
  // check if other fields depend on this field, if so load it.
  emit("updated", field.value);
}

// Function to validate the field and emit 'validated' event
function validate() {
  field.value.validate();
  emit("validated", field.value.name);
}

// Function to invalidate the field and emit 'invalidated' event
function invalidate() {
  field.value.invalidate();
  emit("invalidated", field.value.name);
}

onBeforeUnmount(() => {
  fieldWatcher();
});

// On mounted, set field loading status to false
onMounted(() => {
  field?.value?.isLoading(false);
});
</script>

<template>
  <component
    v-if="showField"
    :is="field?.component"
    v-model="field.value"
    v-bind="field?.props()"
    v-maska:[maskingOptions]
    :rules="rules"
    :fields="props.fields ?? []"
    @update:modelValue="updated"
    @validated="validate"
    @invalidated="invalidate"
    @click:clear="emit('click:clear', $event)"
    @click:prepend="emit('click:prepend', $event)"
    @click:prependInner="emit('click:prependInner', $event)"
    @click:append="emit('click:append', $event)"
    @click:appendInner="emit('click:appendInner', $event)"
  >
    <template #clear v-if="hasClearIcon">
      <EasyIcon :icon="props?.field?.clear_icon" @click="emit('click:clear', $event)" />
    </template>
    <template #append v-if="hasAppendIcon">
      <EasyIcon :icon="props?.field?.append_icon" @click="emit('click:append', $event)" />
    </template>
    <template #append-inner v-if="hasAppendInnerIcon">
      <EasyIcon :icon="props?.field?.append_inner_icon" @click="emit('click:appendInner', $event)" />
    </template>
    <template #prepend v-if="hasPrependIcon">
      <EasyIcon :icon="props?.field?.prepend_icon" @click="emit('click:prepend', $event)" />
    </template>
    <template #prepend-inner v-if="hasPrependInnerIcon">
      <EasyIcon :icon="props?.field?.prepend_inner_icon" @click="emit('click:prependInner', $event)" />
    </template>
    <p class="mb-3 mt-4" v-if="field.component == 'v-radio-group'">
      <v-radio v-for="(radio, i) in field.items" :key="i" v-bind="radio.props()" />
    </p>
    <p class="mb-3 mt-4" v-if="field.component == 'h2'">
      {{ field.value }}
    </p>
  </component>
</template>
