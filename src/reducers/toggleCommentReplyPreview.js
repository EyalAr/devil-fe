export const ACTION_NAME = "TOGGLE_COMMENT_REPLY_PREVIEW"

export const run = (data, action) => {
  return data.setIn(
    ["views", "comment", action.id, "submitReply", "preview"],
    !data.getIn(["views", "comment", action.id, "submitReply", "preview"], false)
  )
}
