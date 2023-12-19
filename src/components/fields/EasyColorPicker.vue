<script setup lang="ts">
import { ref, computed, onMounted, watch, onBeforeUnmount } from "vue";
import { TextField, ColorPicker } from "../../classes/fields";
import { Menu } from "../../classes/elements";
import EasyInput from "./EasyInput.vue";
import type { FieldType } from "../../types";
import { isEmpty } from "../../composables/utils";

// Define props and emit for the component
interface Props {
  menu: Menu;
  modelValue: string | undefined;
  picker: ColorPicker;
  textfield: TextField;
  fields: FieldType[];
}

const cProps = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

// Define the emit function for custom events
const emit = defineEmits<{
  (e: "validated", value: string | undefined): void;
  (e: "invalidated", value: string | undefined): void;
  (e: "update:modelValue", value: any | undefined): void;
}>();

// Create a reference to the TextField object
const textfield = ref<TextField>(cProps.textfield);
const menu = ref<Menu>(cProps.menu);
const picker = ref<ColorPicker>(cProps.picker);
const show_menu = ref<boolean>(false);

const fields = computed<FieldType[]>(() => {
  return cProps.fields ?? [];
});
// Function to handle input update
function handleInputUpdate(event: any) {
  textfield.value.value = event;
  // Update the color of the inner icon
  textfield.value!.prepend_inner_icon!.color = event;
  emit("update:modelValue", textfield.value.value);
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

// Watch for changes in the picker value
const pickerWatcher = watch(picker.value, (color) => {
  handleInputUpdate(color.value);
});

onBeforeUnmount(() => {
  pickerWatcher();
});
// On mounted, set field loading status to false and update inner icon color
onMounted(() => {
  textfield.value?.isLoading(false);
  if (!isEmpty(textfield.value) && !isEmpty(textfield.value.prepend_inner_icon)) {
    textfield.value.prepend_inner_icon!.color = picker.value!.value;
  }
});
</script>

<template>
  <VRow no-gutters>
    <VMenu v-model="show_menu" v-bind="menu.props()">
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
      <VCard width="300">
        <VCardText class="pa-0">
          <VColorPicker v-model="picker.value" v-model:mode="picker.mode" v-bind="picker?.props()" />
        </VCardText>
      </VCard>
    </VMenu>
  </VRow>
</template>
