import { List } from "immutable"
import generateInitialCommentsViewData from "./helpers/generateInitialCommentsViewData"

export const ACTION_NAME = "API.SUBMIT_COMMENT.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "submitComment", action.requestAction.params.id], {
    pending: false,
    error: action.error
  }) :
  data.mergeIn(["views", "submitComment", action.requestAction.params.id], {
    pending: false,
    error: null,
    text: "",
    preview: false,
    visible: false
  })
    .mergeDeepIn(["entities"], action.data.entities)
    .updateIn(
      ["entities", "posts", action.requestAction.params.id, "comments"],
      comments => comments ? comments.push(action.data.result) : List([action.data.result])
    )
    .mergeDeepIn(
      ["views", "comment"],
      generateInitialCommentsViewData(action.data.entities.comments)
    )
