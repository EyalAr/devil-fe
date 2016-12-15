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
      const norm = normalize(json, POSTS_LIST_SCHEMA)
      return {
        result: id,
        time: Date.now(),
        entities: {
          posts: norm.entities.posts,
          users: {
            [id]: {
              ...norm.entities.users[id],
              posts: norm.entities.postsLists[norm.result].posts
            }
          }
        }
      }
    })
}
