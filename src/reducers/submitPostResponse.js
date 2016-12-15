import getInitialSubmitCommentData from "./helpers/getInitialSubmitCommentData"

export const ACTION_NAME = "API.SUBMIT_POST.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "submitPost"], {
    pending: false,
    error: action.error
  }) :
  data.mergeIn(["views", "submitPost"], {
    pending: false,
    error: null,
    visible: false
  }).mergeIn(["views", "post"], {
    pending: false,
    error: null,
    updatedAt: action.data.time,
    ...action.data.entities.posts[action.data.result]
  }).mergeIn(
    ["views", "submitComment", action.data.result],
    getInitialSubmitCommentData()
  ).mergeDeepIn(["entities"], action.data.entities)
