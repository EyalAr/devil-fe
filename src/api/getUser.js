import { resolve } from "url"
import { normalize } from "normalizr"
import { HOST, POSTS_LIST_SCHEMA } from "./config"

export default ({ id, page, sort }, token) => {
  return fetch(resolve(HOST, "posts?user_id=" + id))
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
