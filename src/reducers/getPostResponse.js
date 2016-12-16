import { Map } from "immutable"
import getInitialCommentViewData from "./helpers/getInitialCommentViewData"
import getInitialSubmitCommentData from "./helpers/getInitialSubmitCommentData"

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
    id: action.data.result
  }).updateIn(
    ["views", "submitComment", action.data.result],
    view => view || Map(getInitialSubmitCommentData())
  ).mergeDeepIn(
    ["comment"],
    (Object.keys(action.data.entities.comments) || []).reduce(
      (res, commentId) => {
        res[commentId] = getInitialCommentViewData()
        return res
      },
      {}
    )
  ).mergeDeepIn(["entities"], action.data.entities)
