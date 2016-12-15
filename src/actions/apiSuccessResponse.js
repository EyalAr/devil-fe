export default (actionName, data, requestAction) => ({
  type: ["API", actionName, "RESPONSE"].join("."),
  data, requestAction
})
