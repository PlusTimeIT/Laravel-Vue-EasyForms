<template>
  <v-col :cols="cols" v-show="form_loaded" class="pa-0">
    <validation-observer ref="form" tag="div">
      <form v-bind="form_props()" :ref="loaded_form_name" :key="update_form">
        <v-row class="px-4">
          <v-col cols="12" mx-auto>
            <v-row>
              <form-input
                v-for="(field, index_f) in async_field_list"
                :key="index_f"
                :form_field="field"
                :cols="input_cols(field)"
                :additional_form_data="loaded_additional_form_data"
                @field_update="update_field"
              ></form-input>
            </v-row>
            <v-row v-if="display_button || cancel_button">
              <v-col v-if="display_button">
                <v-btn
                  class="p-4"
                  :color="button_colour"
                  @click="process_form"
                  :rounded="false"
                  tile
                >
                  {{ button_text }}
                </v-btn>
              </v-col>
              <v-col class="text-right" v-if="cancel_button">
                <v-btn class="p-4" @click="cancel_form" :rounded="false" tile>
                  Cancel
                </v-btn>
              </v-col>
            </v-row>
            <v-tooltip top v-if="!display_icon">
              <template v-slot:activator="{ on }">
                <v-icon
                  v-on="on"
                  v-bind="prepare_props()"
                  @click.stop="process_form"
                >
                  {{ icon_mdi }}
                </v-icon>
              </template>
              <span>{{ icon_text }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </form>
    </validation-observer>
  </v-col>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationObserver
  },
  props: {
    identifier: {
      type: [Array, String, Object],
      default: function() {
        return null;
      }
    },
    additional_form_data: {
      type: Object,
      default: () => ({})
    },
    additional_load_form_data: {
      type: Object,
      default: () => ({})
    },
    cols: {
      type: Number,
      default: 12
    },
    load_form: String,
    load_area: String,
    populate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      field_list: {},
      form_loaded: false,
      loaded_area: "",
      loaded_form_name: "",
      loaded_form_data: false,
      update_form: 0
    };
  },
  asyncComputed: {
    async_field_list() {
      let new_field_list = {};
      let self = this;
      Object.keys(this.field_list).forEach(field => {
        let this_field = self.field_list[field];

        if (!self.is_undefined(this_field.rules.hide)) {
          if (
            !self.is_undefined(this_field.rules.show) &&
            self.is_object(this_field.rules.show)
          ) {
            Object.keys(this_field.rules.show).forEach(value => {
              if (
                !self.is_undefined(self.field_list[value].rules.value) &&
                self.field_list[value].rules.value ===
                  this_field.rules.show[value]
              ) {
                new_field_list[field] = this_field;
              }
            });
          }
        } else {
          new_field_list[field] = this_field;
        }
      });

      return new_field_list;
    }
  },
  computed: {
    loaded_additional_form_data: function() {
      return this.additional_form_data;
    },
    loaded_additional_load_form_data: function() {
      return this.additional_load_form_data;
    },
    loaded_identifier: function() {
      return this.identifier;
    },
    form_data: function() {
      var self = this;
      var inputs = {};
      var form_data = new FormData();
      let multi_part =
        !this.is_undefined(this.loaded_form_data.custom_data.axios) &&
        !this.is_undefined(
          this.loaded_form_data.custom_data.axios.multi_part
        ) &&
        this.loaded_form_data.custom_data.axios.multi_part
          ? true
          : false;
      let identifier =
        !this.is_undefined(this.loaded_identifier) &&
        this.loaded_identifier !== null &&
        this.loaded_identifier !== 0
          ? true
          : false;

      Object.keys(this.async_field_list).forEach(item => {
        if (multi_part) {
          //prep formdata
          if (form_data.has(self.async_field_list[item].validation)) {
            form_data.set(
              self.async_field_list[item].validation,
              this.is_object(self.async_field_list[item]["rules"].value) ||
                this.is_array(self.async_field_list[item]["rules"].value)
                ? JSON.stringify(self.async_field_list[item]["rules"].value)
                : self.async_field_list[item]["rules"].value
            );
          } else {
            form_data.append(
              self.async_field_list[item].validation,
              this.is_object(self.async_field_list[item]["rules"].value) ||
                this.is_array(self.async_field_list[item]["rules"].value)
                ? JSON.stringify(self.async_field_list[item]["rules"].value)
                : self.async_field_list[item]["rules"].value
            );
          }
        } else {
          //prep inputs
          inputs[self.async_field_list[item].validation] =
            self.async_field_list[item]["rules"].value;
        }
      });

      if (multi_part) {
        //prep formdata
        form_data.append("form_name", this.loaded_form_name);
        form_data.append("area", this.loaded_area);
        if (identifier) {
          if (form_data.has("id")) {
            form_data.set(
              "id",
              this.is_object(this.loaded_identifier) ||
                this.is_array(this.loaded_identifier)
                ? JSON.stringify(this.loaded_identifier)
                : this.loaded_identifier
            );
          } else {
            form_data.append(
              "id",
              this.is_object(this.loaded_identifier) ||
                this.is_array(this.loaded_identifier)
                ? JSON.stringify(this.loaded_identifier)
                : this.loaded_identifier
            );
          }
        }
        return form_data;
      } else {
        inputs["area"] = this.loaded_form_data.area;
        inputs["form_name"] = this.loaded_form_data.name;
        if (identifier) {
          inputs["id"] = this.loaded_identifier;
        }
        return inputs;
      }
    },
    display_icon: function() {
      if (!this.form_loaded || !this.loaded_form_data) return false;
      return this.is_undefined(this.loaded_form_data.custom_data.button.icon) ||
        this.loaded_form_data.custom_data.button.button === false
        ? false
        : true;
    },
    icon_text: function() {
      if (!this.form_loaded || !this.loaded_form_data) return "Loading...";
      return this.is_undefined(this.loaded_form_data.custom_data.button.icon)
        ? "Submit"
        : this.loaded_form_data.custom_data.button.icon.tooltip;
    },
    icon_mdi: function() {
      if (!this.form_loaded || !this.loaded_form_data) return "primary";
      return this.is_undefined(this.loaded_form_data.custom_data.button.icon)
        ? ""
        : this.loaded_form_data.custom_data.button.icon.mdi;
    },
    display_button: function() {
      if (!this.form_loaded || !this.loaded_form_data) return false;
      return this.is_undefined(this.loaded_form_data.custom_data.button) ||
        this.loaded_form_data.custom_data.button.button === false
        ? false
        : true;
    },
    cancel_button: function() {
      if (!this.form_loaded || !this.loaded_form_data) return false;
      if (this.is_undefined(this.loaded_form_data.custom_data.button))
        return false;
      if (this.is_undefined(this.loaded_form_data.custom_data.button.cancel))
        return false;
      return this.loaded_form_data.custom_data.button.cancel;
    },
    button_text: function() {
      if (!this.form_loaded || !this.loaded_form_data) return "Loading...";
      return this.is_undefined(this.loaded_form_data.custom_data.button.text)
        ? "Submit"
        : this.loaded_form_data.custom_data.button.text;
    },
    button_colour: function() {
      if (!this.form_loaded || !this.loaded_form_data) return "primary";
      return this.is_undefined(this.loaded_form_data.custom_data.button.colour)
        ? "primary"
        : this.loaded_form_data.custom_data.button.colour;
    }
  },
  watch: {
    field_list: {
      handler: function() {
        this.$asyncComputed.async_field_list.update();
      },
      deep: true
    },
    loaded_form_name: function() {},
    form_loaded: function(val) {
      this.$emit("loaded", val);
    },
    loaded_additional_form_data: function() {}
  },
  async mounted() {
    this.loaded_form_name = this.load_form;
    this.loaded_area = this.load_area;
    await this.load_form_fields(this.loaded_identifier, this.loaded_area);
  },
  methods: {
    loaded_computed_field_list() {
      if (this.field_list.length !== 0) {
        let new_field_list = {};
        let self = this;
        Object.keys(this.field_list).forEach(field => {
          let this_field = self.field_list[field];
          if (!self.is_undefined(this_field.rules.hide)) {
            if (
              !self.is_undefined(this_field.rules.show) &&
              self.is_array(this_field.rules.show)
            ) {
              this_field.rules.show.forEach((value, x) => {
                if (
                  !self.is_undefined(self.field_list[x].rules.value) &&
                  self.field_list[x].rules.value === value
                ) {
                  new_field_list[field] = this_field;
                }
              });
            }
          } else {
            new_field_list[field] = this_field;
          }
        });
        return new_field_list;
      }
      return {};
    },
    update_field(event) {
      this.field_list[this.snake_to_camel(event.validation)] = event;
    },
    cancel_form() {
      this.$emit("cancelled", true);
    },
    form_props: function() {
      let result = {};
      if (!this.loaded_form_data) return result;
      if (
        !this.is_undefined(this.loaded_form_data.custom_data.axios) &&
        !this.is_undefined(
          this.loaded_form_data.custom_data.axios.multi_part
        ) &&
        this.loaded_form_data.custom_data.axios.multi_part
      ) {
        result["enctype"] = "application/x-www-form-urlencoded";
      }
      return result;
    },
    prepare_props: function() {
      let result = {};

      if (this.display_icon) {
        result.color = !this.is_undefined(
          this.loaded_form_data.custom_data.button.colour
        )
          ? this.loaded_form_data.custom_data.button.colour
          : "primary";
        result.class = !this.is_undefined(
          this.loaded_form_data.custom_data.button.icon.class
        )
          ? this.loaded_form_data.custom_data.button.icon.class
          : "";
        if (
          this.is_undefined(this.loaded_form_data.custom_data.button.icon.size)
        ) {
          result[this.loaded_form_data.custom_data.button.icon.size] = true;
        }
      }

      return result;
    },
    input_cols: function(field) {
      return this.is_undefined(field.cols) ? 12 : field.cols;
    },
    merge_addition_data: function(form_data, additional_data) {
      let multi_part =
        !this.is_undefined(this.loaded_form_data.custom_data.axios) &&
        !this.is_undefined(
          this.loaded_form_data.custom_data.axios.multi_part
        ) &&
        this.loaded_form_data.custom_data.axios.multi_part
          ? true
          : false;
      Object.keys(additional_data).forEach(function(key) {
        if (multi_part) {
          if (form_data.has(key)) {
            form_data.set(
              key,
              this.is_object(additional_data[key]) ||
                this.is_array(additional_data[key])
                ? JSON.stringify(additional_data[key])
                : additional_data[key]
            );
          } else {
            form_data.append(
              key,
              this.is_object(additional_data[key]) ||
                this.is_array(additional_data[key])
                ? JSON.stringify(additional_data[key])
                : additional_data[key]
            );
          }
        } else {
          form_data[key] = additional_data[key];
        }
      });
      return form_data;
    },
    merge_additional_load_form_data: function(form_data, additional_data) {
      Object.keys(additional_data).forEach(function(key) {
        form_data[key] = additional_data[key];
      });
      return form_data;
    },
    async load_form_fields(id, section) {
      var self = this;
      self.form_loaded = false;

      return this.request(
        "post",
        "/axios/forms/load",
        this.merge_additional_load_form_data(
          {
            form_name: this.loaded_form_name,
            populate: this.populate,
            area: section,
            id: id
          },
          this.loaded_additional_load_form_data
        ),
        true,
        false
      ).then(response => {
        self.form_loaded = true;
        self.field_list = response.data.fields;
        self.loaded_form_data = response.data.form;
      });
    },
    process_form: function() {
      var self = this;
      self.form_loaded = false;
      this.request(
        "post",
        "/axios/forms/process/" +
          this.loaded_form_data.area +
          "/" +
          this.loaded_form_data.name,
        this.merge_addition_data(
          this.form_data,
          this.loaded_additional_form_data
        ),
        this.loaded_form_data.custom_data.axios.expecting_results,
        this.loaded_form_data.custom_data.axios.display_notification,
        this.loaded_form_data.custom_data.axios.headers
      ).then(response => {
        self.form_loaded = true;
        if (!response.success) {
          self.$refs.form.setErrors(self.validate_response(response.data));

          return false;
        }

        self.$refs.form.reset();

        if (self.loaded_form_data.custom_data.axios.expecting_results) {
          self[self.loaded_form_data.custom_data.axios.result_variable] =
            response.data;
          self.$emit("results", response.data);
        }

        if (
          !self.is_undefined(response.redirect_override) &&
          response.redirect_override !== false
        ) {
          self.redirect(response.redirect_override);
        } else if (self.loaded_form_data.custom_data.axios.redirect !== false) {
          self.redirect(self.loaded_form_data.custom_data.axios.redirect);
        }
      });
    },
    is_object_empty: function(o) {
        for (var p in o) {
          if (Object.prototype.hasOwnProperty.call(o,p)) {
            return false; 
          } 
        }
        return true;
      },
      is_object: function(o) { 
        return typeof o === "object" 
      },
      is_array: function(o) { 
        return Array.isArray(o) 
      },
      is_file: function(o) { 
        return('File' in window && o instanceof File) ? true : false 
      },
      is_undefined: function(o) { 
        return typeof(o) === 'undefined' 
      },
      snake_to_camel: function(s) {
        return s.toLowerCase().replace(/[-_][a-z0-9]/g, (group) => group.slice(-1).toUpperCase());
      },
      request: function(type, url, data = null, expecting_results = false , showalert = true , parameters = {} , loader = true) {
        var _this = this;
        let default_parameters = { headers: { 'Content-Type': 'application/json' } };
        let send_parameters = { headers: { ...default_parameters, ...parameters } };
        let return_reponse = {};
        return axios[type](url, data, send_parameters)
        .then(response => {
            var request_response = response.data;
            if(this.is_object(request_response)) {
                if(! request_response.success) {
                    if(! this.is_object(request_response.data)) {
                        if(showalert)
                          return_reponse.alert = { text: request_response.data , colour: 'error' };
                    }else{
                        if(showalert)
                          return_reponse.alert = { text: 'Please correct your form errors' , colour: 'error' };
                    }
                    return_reponse.reposne = request_response;
                    return return_reponse;
                } else {
                    if(showalert)
                      return_reponse.alert = { text: 'Connection Error - Please try again' , colour: 'error' };
                    
                }
            } else {
                if(showalert)
                  return_reponse.alert = { text: 'Connection Error - Please try again' , colour: 'error' };
            }
            return_reponse.reposne = request_response;
        })
        .finally(() => {
            if(loader)  
              return_reponse.loader = false;
            return return_reponse;
        });
      }

  }
};
</script>
