var FormTypes = /* @__PURE__ */ ((FormTypes2) => {
  FormTypes2["Input"] = "input-form";
  FormTypes2["Action"] = "action-form";
  FormTypes2["Error"] = "error-form";
  return FormTypes2;
})(FormTypes || {});
var LoaderEvents = /* @__PURE__ */ ((LoaderEvents2) => {
  LoaderEvents2["Loading"] = "loading";
  LoaderEvents2["Loaded"] = "loaded";
  LoaderEvents2["Results"] = "results";
  LoaderEvents2["Reset"] = "reset";
  LoaderEvents2["Cancelled"] = "cancelled";
  LoaderEvents2["Processing"] = "processing";
  LoaderEvents2["Failed"] = "failed";
  LoaderEvents2["Successful"] = "successful";
  LoaderEvents2["Updated"] = "updated";
  return LoaderEvents2;
})(LoaderEvents || {});
export {
  FormTypes as F,
  LoaderEvents as L
};
