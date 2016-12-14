export const ACTION_NAME = "API.LOGIN.REQUEST"

export const run = (data, action) => {
  return data
    .setIn(["views", "login", "pending"], true)
    .setIn(["views", "login", "received"], false)
}
