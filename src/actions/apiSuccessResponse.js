export default (actionName, data) => ({
  type: ["API", actionName, "RESPONSE"].join("."),
  data
})
