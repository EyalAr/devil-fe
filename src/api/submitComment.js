import { resolve } from "url"
import { HOST } from "./config"
import makeCommentEntityFromJson from "./helpers/makeCommentEntityFromJson"

export default ({ id, text }, token) => {
  const form = new FormData()
  form.append("post_id", id)
  form.append("text", text)
  form.append("token", token)
  return fetch(resolve(HOST, "comments"), {
    method: "POST",
    body: form
  })
    .then(response => response.ok ?
      response.json() :
      response.json().then(json => Promise.reject(Error(json.msg)))
    )
    .then(json => {
      const result = {
        result: json._id,
        time: Date.now(),
        entities: {
          comments: {
            [json._id]: makeCommentEntityFromJson(json)
          }
        }
      }
      return result
    })
}
