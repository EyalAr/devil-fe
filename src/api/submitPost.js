import { resolve } from "url"
import { normalize } from "normalizr"
import { HOST, POST_SCHEMA } from "./config"

export default ({ title, url }, token) => {
  const form = new FormData()
  form.append("title", title)
  form.append("url", url)
  form.append("token", token)
  return fetch(resolve(HOST, "posts"), {
    method: "POST",
    body: form
  })
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => {
      const result = normalize(json, POST_SCHEMA)
      result.time = Date.now()
      return result
    })
}
