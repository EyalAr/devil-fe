import { resolve } from "url"
import { HOST } from "./config"

export default ({ email }) => {
  const form = new FormData()
  form.append("email", email)
  return fetch(resolve(HOST, "users/request_signin_link"), {
    method: "POST",
    body: form
  })
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => ({}))
}
