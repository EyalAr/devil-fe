export const ACTION_NAME = "API.LOGIN.REQUEST"

export const run = (data, action) => {
  return data.setIn(["views", "login", "loading"], true)
}
