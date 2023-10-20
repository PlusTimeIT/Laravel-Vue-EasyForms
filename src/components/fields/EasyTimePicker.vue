<template>
  <v-row no-gutters>
    <v-menu v-model="show_menu" v-bind="menu?.props()">
      <template #activator="{ props }">
        <!-- Render EasyInput component with provided props -->
        <easy-input
          :field="textfield"
          v-bind="{ ...props, ...textfield?.props() }"
          :fields="fields"
          @updated="updated"
          @validated="validate"
          @invalidated="invalidate"
          @click:prependInner="toggleMenu"
          @click:appendInner="toggleMenu"
        />
      </template>
      <v-card class="pa-0" :width="picker.width" :max-width="picker.width">
        <v-card-text class="pa-0" :width="picker.width" :max-width="picker.width">
          <!-- Render TempTimePicker component with provided props -->
          <temp-time-picker v-model="picker.value" v-bind="picker?.props()" @click:save="save" @click:cancel="cancel" />
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted, watch, computed, ComputedRef } from "vue";
import { TextField, TimePicker } from "#/classes/fields";
import { Menu } from "#/classes/elements";
import TempTimePicker from "./TempTimePicker.vue";
import EasyInput from "./EasyInput.vue";
import { FieldType } from "#/types/FieldType";

// Define the component's props interface
interface Props {
  menu: Menu;
  modelValue: string | undefined;
  picker: TimePicker;
  textfield: TextField;
  fields: FieldType[];
}

// Define props with default values
const xProps = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

// Define the emit function for custom events
const emit = defineEmits<{
  (e: "validated", value: string | undefined): void;
  (e: "invalidated", value: string | undefined): void;
  (e: "update:modelValue", value: any | undefined): void;
}>();

// Create a reference to the TextField object
const textfield: Ref<TextField> = ref(xProps.textfield) as Ref<TextField>;

// Create references for menu, picker, and show_menu
const menu: Ref<Menu> = ref(xProps.menu) as Ref<Menu>;
const picker: Ref<TimePicker> = ref(xProps.picker) as Ref<TimePicker>;
const show_menu: Ref<boolean> = ref(false);
const fields: ComputedRef<FieldType[]> = computed(() => {
  return xProps.fields ?? [];
});
// Update the model value when the input is updated
function updated(event: any) {
  textfield.value.value = event;
  emit("update:modelValue", event);
}

// Validate the input field
function validate() {
  textfield.value.validate();
  emit("validated", textfield.value.name);
}

// Invalidate the input field
function invalidate() {
  textfield.value.invalidate();
  emit("invalidated", textfield.value.name);
}

// Handle inner icon clicks (toggle the menu)
function toggleMenu() {
  console.log("toggleMenu");
  show_menu.value = !show_menu.value;
}

// Handle cancel action (close the menu)
function cancel() {
  show_menu.value = false;
}

// Handle save action (close the menu and update the value)
function save(event: any) {
  show_menu.value = false;
  updated(event);
}

// Watch for changes in the picker value and update the textfield value
watch(picker.value, (date) => {
  updated(date.value);
});

// Set the initial value and loading state of the textfield on mount
onMounted(() => {
  textfield.value!.value = xProps.modelValue;
  textfield.value!.isLoading(false);
});
</script>
