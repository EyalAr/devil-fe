import { resolve } from "url"
import { HOST } from "./config"

export default ({ token }) => {
  return fetch(resolve(HOST, "users/login?token=" + token), { method: "POST" })
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => {
      return {
        token: json.token,
        time: Date.now(),
        result: json.user._id,
        entities: {
          users: {
            [json.user._id]: {
              id: json.user._id,
              ...json.user
            }
          }
        }
      }
    })
}
