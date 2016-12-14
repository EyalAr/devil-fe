export const ACTION_NAME = "TOGGLE_REGISTER"

export const run = (data, action) => {
  return data.setIn(
    ["views", "register", "visible"],
    !data.getIn(["views", "register", "visible"], false)
  )
  .setIn(["views", "submitPost", "visible"], false)
  .setIn(["views", "login", "visible"], false)
}
