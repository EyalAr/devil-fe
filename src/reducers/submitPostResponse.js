export const ACTION_NAME = "API.SUBMIT_POST.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "submitPost"], {
    pending: false,
    submitError: action.error
  }) :
  data.mergeIn(["views", "submitPost"], {
    pending: false,
    submitError: null,
    visible: false
  }).mergeIn(["views", "post"], {
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    ...action.data.entities.posts[action.data.result]
  }).mergeDeepIn(["entities"], action.data.entities)
