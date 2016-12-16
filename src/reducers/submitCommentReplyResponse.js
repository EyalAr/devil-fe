import { List } from "immutable"
import generateInitialCommentsViewData from "./helpers/generateInitialCommentsViewData"

export const ACTION_NAME = "API.SUBMIT_COMMENT_REPLY.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "comment", action.requestAction.params.commentId, "submitReply"], {
    pending: false,
    error: action.error
  }) :
  data
    .mergeIn(["views", "comment", action.requestAction.params.commentId, "submitReply"], {
      pending: false,
      error: null,
      text: "",
      preview: false,
      visible: false
    })
    .mergeDeepIn(["entities"], action.data.entities)
    .updateIn(
      ["entities", "comments", action.requestAction.params.commentId, "children"],
      children => children ? children.push(action.data.result) : List([action.data.result])
    )
    .mergeDeepIn(
      ["views", "comment"],
      generateInitialCommentsViewData(action.data.entities.comments)
    )
