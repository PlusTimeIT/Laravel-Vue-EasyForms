<script setup lang="ts">
import type { FieldType, Masking } from "../../types";
import { ref, computed, onMounted, Ref, watchEffect, reactive, onBeforeUnmount, PropType } from "vue"; // Import necessary Vue Composition API functions
import { isEmpty, kebabToPascal } from "../../composables/utils";
import { TextField } from "../../classes/fields"; // Import TextField here

// Default masking options
const MASKING_DEFAULTS: Masking = {
  mask: "",
  eager: true,
};

// Access component props using defineProps
const props = defineProps({
  field: {
    type: Object as PropType<FieldType>,
    required: true,
  },
  fields: {
    type: Array as PropType<FieldType[]>,
    required: true,
  },
  cols: {
    type: Number,
    required: false,
    default: 12,
  },
});

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
const rField: Ref<FieldType> = ref(props.field) as Ref<FieldType>;
const fieldWatcher = watchEffect(() => (rField.value = props.field));
// Create a ref for masking options, including default mask if it's a TextField
const maskingOptions = reactive({
  ...MASKING_DEFAULTS,
  mask: props?.field instanceof TextField ? props.field?.masking : "",
});

// Compute validation rules for the field
const rules = computed(() => rField.value?.validationRules());

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
  emit("updated", rField.value);
}

// Function to validate the field and emit 'validated' event
function validate() {
  rField.value.validate();
  emit("validated", rField.value.name);
}

// Function to invalidate the field and emit 'invalidated' event
function invalidate() {
  rField.value.invalidate();
  emit("invalidated", rField.value.name);
}

onBeforeUnmount(() => {
  fieldWatcher();
});

// On mounted, set field loading status to false
onMounted(() => {
  rField.value?.isLoading(false);
});
</script>

<template>
  <component
    v-if="showField"
    :is="kebabToPascal(field?.component)"
    v-model="rField.value"
    v-bind="rField?.props()"
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
      <EasyIcon :icon="rField?.clear_icon" @click="emit('click:clear', $event)" />
    </template>
    <template #append v-if="hasAppendIcon">
      <EasyIcon :icon="rField?.append_icon" @click="emit('click:append', $event)" />
    </template>
    <template #append-inner v-if="hasAppendInnerIcon">
      <EasyIcon :icon="rField?.append_inner_icon" @click="emit('click:appendInner', $event)" />
    </template>
    <template #prepend v-if="hasPrependIcon">
      <EasyIcon :icon="rField?.prepend_icon" @click="emit('click:prepend', $event)" />
    </template>
    <template #prepend-inner v-if="hasPrependInnerIcon">
      <EasyIcon :icon="rField?.prepend_inner_icon" @click="emit('click:prependInner', $event)" />
    </template>
    <p class="mb-3 mt-4" v-if="rField.component == 'v-radio-group'">
      <VRadio v-for="(radio, i) in rField.items" :key="i" v-bind="radio.props()" />
    </p>
    <p class="mb-3 mt-4" v-if="rField.component == 'h2'">
      {{ rField.value }}
    </p>
  </component>
</template>
