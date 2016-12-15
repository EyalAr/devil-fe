export const ACTION_NAME = "API.SUBMIT_COMMENT.REQUEST"

export const run = (data, action) => {
  return data.setIn(
    ["views", "submitComment", action.params.id, "pending"],
    true
  )
}
