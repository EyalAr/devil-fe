export const ACTION_NAME = "API.LOGIN.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "login"], {
    pending: false,
    error: action.error,
    received: false
  }) :
  data
    .mergeIn(["views", "login"], {
      pending: false,
      visible: false,
      error: null,
      updatedAt: action.data.time,
      received: false
    })
    .mergeDeepIn(["entities"], action.data.entities)
    .set("user", action.data.result)
    .set("token", action.data.token)
