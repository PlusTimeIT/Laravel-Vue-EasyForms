<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "../../classes/elements";
import { isEmpty } from "../../composables/utils";
import { EasyIcon } from "../../components/elements";

const xProps = defineProps<{
  button: Button;
  disabled: boolean;
  identifier?: string | number;
}>();

const emit = defineEmits<{
  (e: "click", value: string | number | undefined): void;
}>();

const button = ref<Button>(xProps.button);

const has_prepend_icon = computed<boolean>(() => {
  return !isEmpty(xProps.button.prepend_icon) && !isEmpty(xProps.button?.prepend_icon?.icon);
});
const has_append_icon = computed<boolean>(() => {
  return !isEmpty(xProps.button.append_icon) && !isEmpty(xProps.button?.append_icon?.icon);
});

function click() {
  if (!isEmpty(xProps?.identifier)) {
    emit("click", xProps?.identifier);
  } else {
    emit("click", "");
  }
}
</script>

<template>
  <v-tooltip v-bind="button?.tooltip?.props()" :disabled="button?.tooltip?.disabled ?? true">
    <template #activator="{ props }">
      <v-btn v-bind="{ ...props, ...button.props() }" :disabled="button.disabled" @click="click">
        <easy-icon v-if="has_prepend_icon" :icon="button.prepend_icon" />
        {{ button.text }}
        <easy-icon v-if="has_append_icon" :icon="button.append_icon" />
      </v-btn>
    </template>
    <span>{{ button?.tooltip?.text }}</span>
  </v-tooltip>
</template>
