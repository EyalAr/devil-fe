export default (actionName, error, requestAction) => ({
  type: ["API", actionName, "RESPONSE"].join("."),
  error, requestAction
})
