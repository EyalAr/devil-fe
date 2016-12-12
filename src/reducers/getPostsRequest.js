export const ACTION_NAME = "API.GET_POSTS.REQUEST"

export const run = (data, action) => {
  return data.setIn(["posts", "loading"], true)
}
