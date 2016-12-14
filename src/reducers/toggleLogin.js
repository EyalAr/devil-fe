export const ACTION_NAME = "TOGGLE_LOGIN"

export const run = (data, action) => {
  return data.setIn(
    ["views", "login", "visible"],
    !data.getIn(["views", "login", "visible"], false)
  )
  .setIn(["views", "submitPost", "visible"], false)
  .setIn(["views", "register", "visible"], false)
}
