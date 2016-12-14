export const ACTION_NAME = "API.REGISTER.REQUEST"

export const run = (data, action) => {
  return data
    .setIn(["views", "register", "pending"], true)
    .setIn(["views", "register", "received"], false)
}
