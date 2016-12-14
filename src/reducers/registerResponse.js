export const ACTION_NAME = "API.REGISTER.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "register"], {
    pending: false,
    error: action.error
  }) :
  data
    .setIn(["views", "register", "pending"], false)
    .setIn(["views", "register", "received"], true)
