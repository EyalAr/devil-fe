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
    .mergeIn(["entities", "users", action.data.user.id], action.data.user)
    .mergeIn(["user"], action.data.user)
    .set("token", action.data.token)
