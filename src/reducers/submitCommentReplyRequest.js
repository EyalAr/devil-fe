export const ACTION_NAME = "API.SUBMIT_COMMENT_REPLY.REQUEST"

export const run = (data, action) => {
  return data.setIn(
    ["views", "comment", action.params.commentId, "submitReply", "pending"],
    true
  )
}
