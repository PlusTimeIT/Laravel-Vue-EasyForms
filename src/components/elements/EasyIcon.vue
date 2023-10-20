<script setup lang="ts">
import { Ref, ref } from "vue";
import { isEmpty } from "#/composables/utils/Types";
import { Icon } from "#/classes/elements";

interface Props {
  icon: Icon | undefined;
  identifier?: string | number;
}
const props = withDefaults(defineProps<Props>(), {
  identifier: "",
});

const emit = defineEmits<{
  (e: "click", value: string | number | undefined): void;
}>();

const icon: Ref<Icon> = ref(props.icon) as Ref<Icon>;

function click() {
  if (!isEmpty(props?.identifier)) {
    emit("click", props?.identifier);
  } else {
    emit("click", "");
  }
}
</script>
<template>
  <v-tooltip v-bind="icon?.tooltip?.props()" :disabled="icon?.tooltip?.disabled ?? true">
    <template #activator="{ props }">
      <v-icon v-bind="{ ...props, ...icon?.props() }" @click="click">
        {{ icon?.icon }}
      </v-icon>
    </template>
    <span>{{ icon?.tooltip?.text }}</span>
  </v-tooltip>
</template>
