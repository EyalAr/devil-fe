import { Map } from "immutable"

export const ACTION_NAME = "LOGOUT"

export const run = (data, action) => {
  return data.set("token", null).set("user", Map())
}
