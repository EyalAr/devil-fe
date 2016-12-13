export const ACTION_NAME = "API.GET_TOKEN.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "login"], {
    loading: false,
    loginError: action.error
  }) :
  data.setIn(["views", "login", "loading"], false)
