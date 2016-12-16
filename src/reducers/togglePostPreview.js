export const ACTION_NAME = "TOGGLE_POST_PREVIEW"

export const run = (data, action) => {
  return data.setIn(
    ["views", "post", "preview"],
    !data.getIn(["views", "post", "preview"], false)
  )
}
