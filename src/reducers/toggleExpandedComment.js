export const ACTION_NAME = "TOGGLE_EXPANDED_COMMENT"

export const run = (data, action) => {
  return data.setIn(
    ["entities", "comments", action.id, "expanded"],
    !data.getIn(["entities", "comments", action.id, "expanded"], false)
  )
}
