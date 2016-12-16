export const ACTION_NAME = "TOGGLE_EXPANDED_COMMENT"

export const run = (data, action) => {
  return data.setIn(
    ["views", "comment", action.id, "expanded"],
    !data.getIn(["views", "comment", action.id, "expanded"], false)
  )
}
