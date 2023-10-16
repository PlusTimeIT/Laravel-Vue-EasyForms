<template>
  <v-col :cols="12">
    <v-row>
      <v-col cols="12">
        <v-alert color="error">
          <div>{{ props.text }}</div>
        </v-alert>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
/**
 * @typedef {Object} ErrorFormProps
 * @property {string} text - The error message text to display.
 */

export default {
  name: "ErrorForm",
};
</script>

<script setup lang="ts">
/** @type {ErrorFormProps} */
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
