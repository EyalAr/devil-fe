export const ACTION_NAME = "TOGGLE_SUBMIT_POST"

export const run = (data, action) => {
  return data.setIn(
    ["views", "submitPost", "visible"],
    !data.getIn(["views", "submitPost", "visible"], false)
  )
}
