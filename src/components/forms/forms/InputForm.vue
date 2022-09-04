<template>
  <v-row>
    <v-form
      v-if="loadedFormData.type == 'input'"
      v-bind="formProps()"
      ref="loadedForm"
      :key="updateForm"
      class="mx-auto w-100"
    >
      <v-col cols="12">
        <v-row>
          <easy-input
            v-for="(field, index_f) in asyncFilteredFieldList"
            :key="index_f"
            v-model="asyncFilteredFieldList[index_f]"
            :cols="getInputCols(field)"
            @field_update="updateField"
          >
          </easy-input>
        </v-row>
        <v-row v-if="displayButton" :align="loadedFormData.buttonAlignRow" :justify="loadedFormData.buttonJustifyRow">
          <v-col cols="auto" v-for="(button, index) in loadedFormData.buttons" :key="index">
            <easy-button
              :button="button"
              :identifier="index"
              @click="buttonAction(button)"
            ></easy-button>
          </v-col>
        </v-row>
      </v-col>
    </v-form>
  </v-row>
</template>

<script>
import { FormMixin } from "../mixins/FormMixins";
import EasyInput from "../parts/LvefInput.vue";
import EasyButton from "../parts/LvefButton.vue";

// Input Form emits the current events
// @loading - boolean - true if form is loading, false if loaded
// @reset - boolean - the form has been reset
//

export default {
  name: "InputForm",
  components: {
    EasyInput,
    EasyButton
  },
  mixins: [FormMixin],
  props: {
    additional_form_data: {
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
    form: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fieldList: {},
      formLoading: true,
      formLoaded: false,
      loadedFormName: "",
      loadedFormData: false,
      originalFormData: false,
      updateForm: 0
    };
  },
  asyncComputed: {
    async asyncFilteredFieldList() {
      const fields = {};
      const _this = this;

      const fieldKeys = Object.keys(this.fieldList);

      for (const field of fieldKeys) {
        const thisField = _this.fieldList[field];
        let isParentLoaded = await _this.parentLoaded(thisField);
        if (isParentLoaded) {
          // parent null or is loaded so add to fieldList
          fields[field] = thisField;
        }
      }

      return fields;
    }
  },
  computed: {
    loadedAdditionalFormData: function() {
      return this.additional_form_data;
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
    fieldList: {
      handler: function() {
        this.$asyncComputed.asyncFilteredFieldList.update();
      },
      deep: true
    },
    formLoading: function(val) {
      this.$emit("loading", val);
    }
  },
  async created() {
    if (this.isObject(this.form)) {
      this.loadedFormName = this.form.name;
      this.formLoaded = true;
      this.loadedFormData = this.form;
      this.fieldList = this.loadedFormData.fields;
      this.originalFormData = { ...this.loadedFormData };
      this.formLoading = false;
    }
  },
  methods: {
    async loadField(field) {
      this.fieldLoaded = false;
      const _this = this;
      return this.request(
        "post",
        this.$axiosPrefix + "/forms/fields/load",
        this.mergeAdditionalLoadFormData(
          {
            form_name: this.form.name,
            field_name: field.name
          },
          this.parentLoadingData(field)
        )
      ).then(axiosResponse => {
        _this.formLoading = axiosResponse.loader;
        if (!axiosResponse.result) {
          return Promise.resolve(false);
        }
        return Promise.resolve(axiosResponse.data);
      });
    },
    getField: function(fieldName) {
      const fieldIndex = this.fieldList.findIndex(
        element => element.name == fieldName
      );
      return this.fieldList[fieldIndex];
    },
    parentLoadingData: function(field) {
      if (field.dependsOn === null) {
        return { dependsOn: null };
      }
      let parentField = this.getField(field.dependsOn);
      return { dependsOn: parentField.value };
    },
    async parentLoaded(field) {
      if (this.isUndefined(field.dependsOn)) {
        return true;
      }
      if (field.dependsOn == null) {
        return true;
      }

      //check if parent loading data has been set
      let parentData = this.parentLoadingData(field);
      if (parentData.dependsOn == null) {
        return false;
      }
      if (parentData.dependsOn.length == 0) {
        return false;
      }
      return true;
    },
    async updateField(event) {
      let _this = this;
      const fieldIndex = this.fieldList.findIndex(
        element => element.name == event.name
      );
      this.fieldList[fieldIndex] = event;

      // if parent to fields
      let childFieldIndexs = this.fieldList.reduce((a, field, index) => {
        if (
          !_this.isUndefined(field.dependsOn) &&
          field.dependsOn == event.name
        )
          a.push(index);
        return a;
      }, []);

      for (const index of childFieldIndexs) {
        let tmp_field = this.fieldList[index];
        let fieldData = await this.loadField(tmp_field);
        if (tmp_field.type == "select") {
          this.fieldList[index].items = fieldData;
        } else {
          this.fieldList[index].value = fieldData;
        }
      }
    },
    resetForm(triggerAlerts = true) {
      // clear data
      this.$refs.loadedForm.reset();

      // repopulate
      this.loadedFormData = { ...this.originalFormData };
      this.fieldList = [...this.originalFormData.fields];
      if (triggerAlerts) {
        this.$emit("reset", true);
      }

      this.formLoading = false;
    },
    cancelForm() {
      console.log('cancel form - cancelled');
      this.$emit("cancelled", true);
      this.formLoading = false;
    },
    formProps: function() {
      const result = {};
      if (!this.loadedFormData) return result;
      if (
        !this.isUndefined(this.loadedFormData.axios) &&
        !this.isUndefined(this.loadedFormData.axios.multiPart) &&
        this.loadedFormData.axios.multiPart
      ) {
        result["enctype"] = "application/x-www-form-urlencoded";
      }
      return result;
    },
    getInputCols: function(field) {
      return this.isUndefined(field.cols) ? 12 : field.cols;
    },
    async buttonAction(button) {
      this.formLoading = true;
      console.log('button action', button);
      if (!this.isUndefined(button.type)) {
        if (button.type == "process") {
          this.processForm(
            this.loadedFormData,
            this.loadedFormData.fields,
            this.loadedIdentifier,
            this.loadedAdditionalFormData
          );
          console.log('button process');
        }

        if (button.type == "reset") {
            console.log('button reset');
          this.resetForm();
        }

        if (button.type == "cancel") {
            console.log('button cancel');
          this.cancelForm();
        }

        this.formLoading = false;
        return 0;
      }

      alert("button action error :(");
      return 0;
    }
  }
};
</script>
