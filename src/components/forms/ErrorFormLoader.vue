<script setup lang="ts">
/** @type {ErrorFormProps} */
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <VCol :cols="12">
    <VRow>
      <VCol cols="12">
        <VAlert color="error">
          <div>{{ props.text }}</div>
        </VAlert>
      </VCol>
    </VRow>
  </VCol>
</template>
