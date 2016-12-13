export const ACTION_NAME = "API.GET_TOKEN.REQUEST"

export const run = (data, action) => {
  return data.setIn(["views", "login", "loading"], true)
}
