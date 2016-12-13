export const ACTION_NAME = "API.GET_TOKEN.RESPONSE"

export const run = (data, action) => {
  return data.setIn(["views", "login", "loading"], false)
}
