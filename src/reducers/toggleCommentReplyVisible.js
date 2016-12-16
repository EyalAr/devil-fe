export const ACTION_NAME = "TOGGLE_COMMENT_REPLY_VISIBLE"

export const run = (data, action) => {
  return data.setIn(
    ["views", "comment", action.id, "submitReply", "visible"],
    !data.getIn(["views", "comment", action.id, "submitReply", "visible"], false)
  )
}
