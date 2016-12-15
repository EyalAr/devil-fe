export const ACTION_NAME = "TOGGLE_SUBMIT_COMMENT_PREVIEW"

export const run = (data, action) => {
  return data.setIn(
    ["views", "submitComment", action.id, "preview"],
    !data.getIn(["views", "submitComment", action.id, "preview"], false)
  )
}
