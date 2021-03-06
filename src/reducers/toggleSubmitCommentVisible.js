export const ACTION_NAME = "TOGGLE_SUBMIT_COMMENT_VISIBLE"

export const run = (data, action) => {
  return data.setIn(
    ["views", "submitComment", action.id, "visible"],
    !data.getIn(["views", "submitComment", action.id, "visible"], false)
  )
}
