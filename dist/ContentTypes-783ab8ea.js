var AxiosCalls = /* @__PURE__ */ ((AxiosCalls2) => {
  AxiosCalls2["Get"] = "get";
  AxiosCalls2["Post"] = "post";
  AxiosCalls2["Patch"] = "patch";
  AxiosCalls2["Put"] = "put";
  AxiosCalls2["Delete"] = "delete";
  return AxiosCalls2;
})(AxiosCalls || {});
var ContentTypes = /* @__PURE__ */ ((ContentTypes2) => {
  ContentTypes2["MultiPart"] = "multipart/form-data";
  ContentTypes2["Application"] = "application/x-www-form-urlencoded";
  ContentTypes2["JSON"] = "application/json";
  return ContentTypes2;
})(ContentTypes || {});
export {
  AxiosCalls as A,
  ContentTypes as C
};
