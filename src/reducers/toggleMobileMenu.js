export const ACTION_NAME = "TOGGLE_MOBILE_MENU"

export const run = (data, action) => {
  return data.setIn(
    ["views", "app", "mobileMenuVisible"],
    !data.getIn(["views", "app", "mobileMenuVisible"], false)
  )
}
