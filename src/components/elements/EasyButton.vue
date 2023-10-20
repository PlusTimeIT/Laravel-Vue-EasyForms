<script lang="ts">
export default {
  name: "EasyButton",
};
</script>
<script setup lang="ts">
import { ComputedRef, computed, Ref, ref } from "vue";
import { Button } from "#/classes/elements";
import { isEmpty } from "#/composables/utils/Types";
import { EasyIcon } from "#/components/elements";

const props = defineProps<{
  button: Button;
  disabled: boolean;
  identifier?: string | number;
}>();

const emit = defineEmits<{
  (e: "click", value: string | number | undefined): void;
}>();

const button: Ref<Button> = ref(props.button) as Ref<Button>;

const has_prepend_icon: ComputedRef<boolean> = computed(() => {
  return !isEmpty(props.button.prepend_icon) && !isEmpty(props.button?.prepend_icon?.icon);
});
const has_append_icon: ComputedRef<boolean> = computed(() => {
  return !isEmpty(props.button.append_icon) && !isEmpty(props.button?.append_icon?.icon);
});

function click() {
  if (!isEmpty(props?.identifier)) {
    emit("click", props?.identifier);
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
