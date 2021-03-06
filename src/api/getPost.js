import { resolve } from "url"
import { normalize } from "normalizr"
import { HOST, POST_SCHEMA } from "./config"

export default ({ id, page, mode, sort }, token) => {
  return fetch(resolve(HOST, "posts/" + id))
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
