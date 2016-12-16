export const ACTION_NAME = "REPLY_COMMENT_TEXT_CHANGE"

export const run = (data, action) => {
  return data.setIn(
    ["views", "comment", action.id, "submitReply", "text"],
    action.text
  )
}
