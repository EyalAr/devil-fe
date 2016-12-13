export const ACTION_NAME = "API.GET_USER.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "user"], {
    loading: false,
    loadingError: action.error
  }) :
  data.mergeIn(["views", "user"], {
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    posts: action.data.result,
    username: action.data.username
  }).mergeDeepIn(["entities"], action.data.entities)
