<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg">
    <v-row>
      <v-col v-if="loadedFormName == ''">
        <h1>Error Loading Form</h1>
      </v-col>
    </v-row>
    <validation-observer ref="observer">
      <v-row>
        <v-col cols="12">
          <v-alert
            v-for="(alert, index) in loadedAlerts"
            :key="index"
            v-model="alerts[index].display"
            v-bind="prepareAlertProps(alert)"
          >
            <div v-html="alert.contents"></div>
          </v-alert>
        </v-col>
      </v-row>
      <v-row v-show="formLoading">
        <v-col>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-col>
      </v-row>
      <v-row v-show="!formLoading">
        <component
          :is="formComponent"
          :form="loadedFormData"
          :additional_form_data="loadedAdditionalFormData"
          @results="formHasResults"
          @errors="formHasErrors"
          @loading="formIsLoading"
          @reset="formIsReset"
          @cancelled="formIsCancelled"
          @processing="formIsProcessing"
          @failed="formHasFailedProcessing"
          @successful="formHasSuccessfulProcessing"
          @updated_fields="formHasUpdatedFields"
        ></component>
      </v-row>
    </validation-observer>
  </v-col>
</template>

<script>
// This main form emits the current events
// @loaded - boolean - whether the form has been successfully loaded.

import { ValidationObserver } from "vee-validate";
import { FormMixin } from "./mixins/FormMixins";
import InputForm from "./forms/InputForm.vue";
import ActionForm from "./forms/ActionForm.vue";

export default {
  name: "FormLoader",
  components: {
    ValidationObserver,
    ActionForm,
    InputForm
  },
  mixins: [FormMixin],
  props: {
    identifier: {
      type: [Array, String, Object],
      default: function() {
        return null;
      }
    },
    additional_form_data: {
      // additional form data to be passed to on form processing
      type: Object,
      default: () => ({})
    },
    additional_load_form_data: {
      // additional form data to be passed to on form loading
      type: Object,
      default: () => ({})
    },
    cols: {
      type: Number,
      default: 12
    },
    sm: {
      type: Number,
      default: 12
    },
    md: {
      type: Number,
      default: 12
    },
    lg: {
      type: Number,
      default: 12
    },
    load_form: {
      type: [String, Object],
      default: ""
    },
    populate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      alerts: [],
      formLoading: true,
      formLoaded: true,
      results: false,
      loadedFormName: "",
      loadedFormData: false,
      originalFormData: false
    };
  },
  computed: {
    formComponent: function() {
      if (this.loadedFormData.type == "input") {
        return "input-form";
      }
      if (this.loadedFormData.type == "action") {
        return "action-form";
      }
      return false;
    },
    loadedAlerts: function() {
      return this.alerts;
    },
    loadedAdditionalFormData: function() {
      return this.additional_form_data;
    },
    loadedAdditionalLoadFormData: function() {
      return this.additional_load_form_data;
    },
    loadedIdentifier: function() {
      return this.identifier;
    },
    displayButton: function() {
      if (!this.formLoaded || !this.loadedFormData) return false;
      return this.isUndefined(this.loadedFormData.buttons) ||
        !this.isArray(this.loadedFormData.buttons) ||
        this.loadedFormData.buttons.length === 0
        ? false
        : true;
    }
  },
  watch: {
    formLoaded: function(val) {
      this.$emit("loaded", val);
      if (val) {
        this.formLoading = false;
      }
    }
  },
  async created() {
    if (this.isObject(this.load_form)) {
      // load form by page load (passed directly to the component)
      const _this = this;
      this.loadedFormName = this.load_form.name;
      this.formLoaded = true;
      this.loadedFormData = this.load_form;
      this.alerts = [...this.load_form.alerts];
      this.alerts.forEach(function(alert, index) {
        alert.display = false;
        alert.old_contents = alert.contents;
        _this.$set(_this.alerts, index, alert);
      });
      this.triggerAlerts("before_load");
      this.originalFormData = { ...this.load_form };
      this.formLoading = false;
      this.triggerAlerts("after_load");
    } else {
      // load by axios call from form name
      this.formLoading = true;
      this.loadedFormName = this.load_form;
      await this.getFormDetails(this.loadedIdentifier);
    }
  },
  methods: {
    formHasResults: function(event) {
      this.results = event;
      this.$emit("results", event);
    },
    formHasErrors: function(event) {
      this.$refs.observer.setErrors(event);
    },
    formIsLoading: function(event) {
      this.$emit("loading", event);
      this.formLoading = event;
    },
    formIsReset: function() {
      this.$emit("reset_form", true);
      this.triggerAlerts("reset_form");
      this.$refs.observer.reset();
    },
    formIsCancelled: function() {
      this.$emit("cancelled", true);
      this.triggerAlerts("cancelled");
    },
    formIsProcessing: function() {
      this.triggerAlerts("before_processing");
    },
    formHasFailedProcessing: function(event) {
      this.triggerAlerts("failed_processing", event);
    },
    formHasUpdatedFields: function(event) {
      // check if fields are the same or not.
      if (this.loadedFormData.fields != event) {
        this.loadedFormData.fields = event;
        this.$emit("updated", true);
      }
    },
    formHasSuccessfulProcessing: function(event) {
      this.triggerAlerts("successful_processing", event);
    },
    async getFormDetails(id) {
      this.formLoaded = false;
      let _this = this;
      return this.request(
        "post",
        this.$axiosPrefix + "/forms/load",
        this.mergeAdditionalLoadFormData(
          {
            form_name: this.loadedFormName,
            populate: this.populate,
            id: id
          },
          this.loadedAdditionalLoadFormData
        )
      ).then(axiosResponse => {
        _this.formLoading = axiosResponse.loader;
        if (!axiosResponse.result) {
          _this.triggerAlerts("failed_load");
          return false;
        }
        _this.formLoaded = true;
        _this.loadedFormData = JSON.parse(JSON.stringify(axiosResponse.data));
        _this.originalFormData = JSON.parse(JSON.stringify(axiosResponse.data));
        _this.alerts = [..._this.loadedFormData.alerts];
        _this.alerts.forEach(function(alert, index) {
          alert.display = false;
          alert.old_contents = alert.contents;
          _this.$set(_this.alerts, index, alert);
        });
        _this.triggerAlerts("after_load");
      });
    }
  }
};
</script>
