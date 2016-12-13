export const ACTION_NAME = "API.GET_POST.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "post"], {
    loading: false,
    loadingError: action.error
  }) :
  data.mergeIn(["views", "post"], {
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    ...action.data.entities.posts[action.data.result]
  }).mergeDeepIn(["entities"], action.data.entities)
