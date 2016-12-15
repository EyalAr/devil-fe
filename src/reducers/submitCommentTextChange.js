export const ACTION_NAME = "SUBMIT_COMMENT_TEXT_CHANGE"

export const run = (data, action) => {
  return data.setIn(
    ["views", "submitComment", action.id, "text"],
    action.text
  )
}
