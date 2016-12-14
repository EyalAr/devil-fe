import { resolve } from "url"
import { HOST } from "./config"

export default ({ email, name }) => {
  const form = new FormData()
  form.append("email", email)
  form.append("name", name)
  return fetch(resolve(HOST, "users/register"), {
    method: "POST",
    body: form
  })
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => ({}))
}
