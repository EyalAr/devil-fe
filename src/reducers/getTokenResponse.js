export const ACTION_NAME = "API.GET_TOKEN.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "login"], {
    pending: false,
    error: action.error,
    received: false
  }) :
  data
    .setIn(["views", "login", "pending"], false)
    .setIn(["views", "login", "received"], true)
