<script setup lang="ts">
import { ref, watchEffect, onBeforeUnmount, watch } from "vue";

const props = defineProps<{
  modelValue: boolean;
  lowerCase?: boolean;
  minLength?: boolean | number;
  numbers?: boolean;
  special?: boolean;
  upperCase?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const dialog = ref<boolean>(props.modelValue);
const dialogEffectWatcher = watchEffect(() => (dialog.value = props.modelValue));

const dialogWatcher = watch(dialog, (update) => {
  emit("update:modelValue", update);
});

onBeforeUnmount(() => {
  dialogEffectWatcher();
  dialogWatcher();
});
</script>

<template>
  <VDialog v-model="dialog" width="auto">
    <VCard>
      <VCardTitle> Your password must contain: </VCardTitle>
      <VCardText>
        <VRow>
          <VCol v-if="props.lowerCase" :cols="12" :md="6">
            <VIcon color="success">mdi-check</VIcon>
            Lowercase Characters
          </VCol>
          <VCol v-if="props.upperCase" :cols="12" :md="6">
            <VIcon color="success">mdi-check</VIcon>
            Uppercase Characters
          </VCol>
          <VCol v-if="props.special" :cols="12" :md="6">
            <VIcon color="success">mdi-check</VIcon>
            Special Characters
          </VCol>
          <VCol v-if="props.numbers" :cols="12" :md="6">
            <VIcon color="success">mdi-check</VIcon>
            Numbers
          </VCol>
          <VCol v-if="props.minLength" :cols="12" :md="6">
            <VIcon color="success">mdi-check</VIcon>
            Minimum Length - {{ props.minLength }}
          </VCol>
        </VRow>
      </VCardText>
      <VCardActions>
        <VBtn color="primary" @click="dialog = false" class="mx-auto">Close Dialog</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
