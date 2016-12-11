export default (actionName, error) => ({
  type: ["API", actionName, "RESPONSE"].join("."),
  error
})
