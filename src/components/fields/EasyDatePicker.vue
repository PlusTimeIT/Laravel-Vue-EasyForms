<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { TextField, DatePicker } from "../../classes/fields";
import { Menu } from "../../classes/elements";
import moment from "moment";
import EasyInput from "./EasyInput.vue";
import type { FieldType } from "../../types";

// Define props and emit for the component
interface Props {
  menu: Menu;
  modelValue: string | undefined;
  picker: DatePicker;
  textfield: TextField;
  fields: FieldType[];
}

const xProps = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const emit = defineEmits<{
  (e: "validated", value: string | undefined): void;
  (e: "invalidated", value: string | undefined): void;
  (e: "update:modelValue", value: TextField | undefined): void;
}>();

// Create refs for component properties
const textfield = ref<TextField>(xProps.textfield);
const menu = ref<Menu>(xProps.menu);
const picker = ref<DatePicker>(xProps.picker);
const show_menu = ref<boolean>(false);
const fields = computed<FieldType[]>(() => {
  return xProps.fields ?? [];
});
// Function to handle input update
function handleInputUpdate(event: any) {
  textfield.value.value = event;
  emit("update:modelValue", event);
}

// Function to validate the field
function validateField() {
  textfield.value.validate();
  emit("validated", textfield.value.name);
}

// Function to invalidate the field
function invalidateField() {
  textfield.value.invalidate();
  emit("invalidated", textfield.value.name);
}

// Function to toggle the menu visibility
function toggleMenu() {
  show_menu.value = !show_menu.value;
}

// Function to cancel date selection
function cancelDatePicker() {
  show_menu.value = false;
}

// Function to save date selection
function saveDatePicker(event: any) {
  show_menu.value = false;
  const date = moment(event).format(picker.value.format);
  handleInputUpdate(date);
}

// On mounted, set field loading status to false
onMounted(() => {
  textfield.value?.isLoading(false);
});
</script>

<template>
  <VRow no-gutters>
    <VMenu v-model="show_menu" v-bind="menu?.props()">
      <template #activator="{ props }">
        <!-- Use EasyInput component with v-model -->
        <EasyInput
          v-model:field="textfield"
          v-bind="{ ...props, ...textfield?.props() }"
          :fields="fields"
          @updated="handleInputUpdate"
          @validated="validateField"
          @invalidated="invalidateField"
          @click:prependInner="toggleMenu"
          @click:appendInner="toggleMenu"
        />
      </template>
      <VCard class="pa-0" :width="picker.width" :max-width="picker.width">
        <VCardText class="pa-0" :width="picker.width" :max-width="picker.width">
          <!-- Use v-date-picker component for date selection -->
          <VDatePicker
            v-model="picker.value"
            v-bind="picker?.props()"
            @click:save="saveDatePicker"
            @click:cancel="cancelDatePicker"
          />
        </VCardText>
      </VCard>
    </VMenu>
  </VRow>
</template>
