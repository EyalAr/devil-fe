import { resolve } from "url"
import { normalize } from "normalizr"
import { HOST, POSTS_LIST_SCHEMA } from "./config"

export default ({ page, sort }, token) => {
  return fetch(resolve(HOST, "posts"))
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => {
      const result = normalize(json, POSTS_LIST_SCHEMA)
      result.time = Date.now()
      return result
    })
}
