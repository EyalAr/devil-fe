export const ACTION_NAME = "API.GET_USER.REQUEST"

export const run = (data, action) => {
  return data.setIn(["views", "user", "loading"], true)
}
