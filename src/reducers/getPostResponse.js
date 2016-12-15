import { Map } from "immutable"
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
  ).mergeDeepIn(["entities"], action.data.entities)
