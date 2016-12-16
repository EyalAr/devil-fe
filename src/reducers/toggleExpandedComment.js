export const ACTION_NAME = "TOGGLE_EXPANDED_COMMENT"

export const run = (data, action) => {
  return data.setIn(
    ["comment", action.id, "expanded"],
    !data.getIn(["comment", action.id, "expanded"], false)
  )
}
