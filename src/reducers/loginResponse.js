export const ACTION_NAME = "API.LOGIN.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "login"], {
    loading: false,
    loginError: action.error
  }) :
  data
    .mergeIn(["views", "login"], {
      loading: false,
      loginError: null,
      updatedAt: action.data.time
    })
    .mergeIn(["entities", "users", action.data.user.id], action.data.user)
    .mergeIn(["user"], action.data.user)
    .set("token", action.data.token)
