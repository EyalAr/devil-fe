import { resolve } from "url"
import { HOST } from "./config"

export default ({ email }) => {
  return fetch(resolve(HOST, "users/request_signin_link"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => ({}))
}
