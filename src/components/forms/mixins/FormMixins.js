export const FormMixin = {
  methods: {
    isObjectEmpty: function(o) {
      for (const p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          return false;
        }
      }
      return true;
    },
    isObject: function(o) {
      return typeof o === "object";
    },
    isArray: function(o) {
      return Array.isArray(o);
    },
    isFile: function(o) {
      return "File" in window && o instanceof File ? true : false;
    },
    isUndefined: function(o) {
      return typeof o === "undefined";
    },
    snakeToCamel: function(s) {
      return s
        .toLowerCase()
        .replace(/[-_][a-z0-9]/g, group => group.slice(-1).toUpperCase());
    },
    request: function(type, url, data = null, parameters = {}) {
      const defaultParameters = {
        headers: { "Content-Type": "application/json" }
      };
      const sendParameters = {
        headers: { ...defaultParameters, ...parameters }
      };
      return this.$axios[type](url, data, sendParameters).then(response => {
        return response.data;
      });
    },
    validateResponse: function(response) {
      const errors = {};
      Object.keys(response).forEach(item => {
        errors[item] = [];
        Object.keys(response[item]).forEach(error => {
          errors[item].push(response[item][error]);
        });
      });
      return errors;
    },
    redirect: function(location) {
      if (location == "reload") {
        window.location.reload();
        return false;
      }
      window.location.href = location;
      return false;
    },
    cleanAlerts: function() {
      const _this = this;
      this.alerts.forEach(function(alert, index) {
        if (
          alert.trigger == "failed_processing" ||
          alert.trigger == "successful_processing"
        ) {
          alert.display = false;
          alert.contents = alert.old_contents;
          _this.$set(_this.alerts, index, alert);
        }
      });
    },
    prepareAlertProps: function(alert) {
      const result = {};
      Object.keys(alert).forEach(function(key) {
        result[key] = alert[key];
        if (key == "icon" && alert[key] !== null) {
          result[key] = alert[key].icon;
        }
        if (key == "text_style" && alert[key] !== null) {
          result["text"] = alert[key].icon;
        }
      });
      return result;
    },
    triggerAlerts(alertTrigger, text = null) {
      const _this = this;
      console.log('triggerAlerts', alertTrigger)
      this.alerts.forEach(function(alert, index) {
        if (alert.trigger == alertTrigger) {
          console.log('triggerAlerts - found')
          alert.display = true;
          alert.contents = alert.old_contents.replace(
            "<response-data>",
            _this.isObject(text) ? "There is validation errors" : text
          );
          if (alert.auto_close_timer !== 0) {
            setTimeout(function() {
              alert.display = false;
              _this.$set(_this.alerts, index, alert);
            }, alert.auto_close_timer);
          }
        }
        console.log('triggerAlerts - set', alert, index)
        _this.$set(_this.alerts, index, alert);
      });
    },
    mergeAdditionalLoadFormData: function(formData, additionalData) {
      Object.keys(additionalData).forEach(function(key) {
        formData[key] = additionalData[key];
      });
      return formData;
    },

    async processForm(
      form,
      data,
      identifier = 0,
      additionalData = {},
      action = []
    ) {
      const _this = this;
      this.$emit("processing");
      let formAxios = form.axios;
      return _this
        .request(
          "post",
          this.$axiosPrefix + "/forms/process",
          _this.mergeAdditionData(
            form,
            _this.formData(form, data, identifier),
            additionalData,
            action
          ),
          formAxios.headers
        )
        .then(axiosResponse => {
          if (formAxios.expecting_results) {
            _this.$emit("results", axiosResponse);
          }

          if (!axiosResponse.result) {
            _this.$emit("errors", axiosResponse.data);
            _this.$emit("failed", axiosResponse.data);
            return Promise.resolve(axiosResponse);
          }

          _this.$emit("successful", axiosResponse.data);
          // Response redirect should override form redirect
          if (
            !_this.isUndefined(axiosResponse.redirect) &&
            axiosResponse.redirect !== null
          ) {
            _this.$emit("redirect", axiosResponse.redirect);
            _this.redirect(axiosResponse.redirect);
          }

          if (
            !_this.isUndefined(formAxios.redirect) &&
            formAxios.redirect !== false
          ) {
            _this.$emit("redirect", formAxios.redirect);
            _this.redirect(formAxios.redirect);
          }

          if (
            !_this.isUndefined(formAxios.form_reset) &&
            formAxios.form_reset !== false
          ) {
            _this.resetForm(false);
          }

          return Promise.resolve(axiosResponse);
        });
    },
    formData: function(form, data, identifier) {
      const _this = this;
      const inputs = {};
      const formData = new FormData();
      const multiPart =
        !this.isUndefined(form.axios.multiPart) && form.axios.multiPart
          ? true
          : false;
      const identifierIsPresent =
        !this.isUndefined(identifier) && identifier !== 0 ? true : false;

      Object.keys(data).forEach(item => {
        if (multiPart) {
          if (formData.has(data[item].name)) {
            formData.set(
              data[item].name,
              _this.isObject(data[item].value) ||
                _this.isArray(data[item].value)
                ? JSON.stringify(data[item].value)
                : data[item].value
            );
          } else {
            formData.append(
              data[item].name,
              _this.isObject(data[item].value) ||
                _this.isArray(data[item].value)
                ? JSON.stringify(data[item].value)
                : data[item].value
            );
          }
        } else {
          inputs[data[item].name] = data[item].value;
        }
      });

      let identifier_data =
        _this.isObject(identifier) || _this.isArray(identifier)
          ? JSON.stringify(identifier)
          : identifier;
      if (multiPart) {
        formData.append("form_name", form.name);
        if (identifierIsPresent) {
          if (formData.has("id")) {
            formData.set("id", identifier_data);
          } else {
            formData.append("id", identifier_data);
          }
        }
        return formData;
      }
      inputs["form_name"] = form.name;
      if (identifierIsPresent) {
        inputs["id"] = identifier;
      }
      return inputs;
    },
    mergeAdditionData: function(form, formData, additionalData, action) {
      const multiPart =
        !this.isUndefined(form.axios) &&
        !this.isUndefined(form.axios.multi_part) &&
        form.axios.multiPart
          ? true
          : false;
      const _this = this;
      Object.keys(additionalData).forEach(function(key) {
        if (multiPart) {
          if (formData.has(key)) {
            formData.set(
              key,
              _this.isObject(additionalData[key]) ||
                _this.isArray(additionalData[key])
                ? JSON.stringify(additionalData[key])
                : additionalData[key]
            );
          } else {
            formData.append(
              key,
              _this.isObject(additionalData[key]) ||
                _this.isArray(additionalData[key])
                ? JSON.stringify(additionalData[key])
                : additionalData[key]
            );
          }
        } else {
          formData[key] = additionalData[key];
        }
      });

      if (multiPart) {
        formData.append("form_action", action);
      } else {
        formData["form_action"] = action;
      }

      return formData;
    }
  }
};
