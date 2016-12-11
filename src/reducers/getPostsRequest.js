export ACTION_NAME = "API.GET_POSTS.REQUEST"

export default (data, action) => {
  return data.setIn(["posts", "loading"], true)
}
