import getInitialCommentViewData from "./getInitialCommentViewData"

export default comments => Object.keys(comments || {}).reduce(
  (res, commentId) => {
    res[commentId] = getInitialCommentViewData()
    return res
  },
  {}
)
