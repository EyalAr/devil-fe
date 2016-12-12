export const ACTION_NAME = "API.GET_POST.REQUEST"

export const run = (data, action) => {
  return data.setIn(["post", "loading"], true)
}
