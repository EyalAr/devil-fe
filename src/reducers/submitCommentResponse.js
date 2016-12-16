import { List } from "immutable"
import getInitialCommentViewData from "./helpers/getInitialCommentViewData"

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
    .mergeDeep(
      "comment",
      (action.data.entities.comments || []).reduce(
        (res, comment) => {
          res[comment.id] = getInitialCommentViewData()
          return res
        },
        {}
      )
    )
