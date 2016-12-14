export const ACTION_NAME = "API.GET_POST.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "post"], {
    pending: false,
    error: action.error
  }) :
  data.mergeIn(["views", "post"], {
    pending: false,
    error: null,
    updatedAt: action.data.time,
    ...action.data.entities.posts[action.data.result]
  }).mergeDeepIn(["entities"], action.data.entities)
