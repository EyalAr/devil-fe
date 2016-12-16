import { resolve } from "url"
import { HOST } from "./config"

export default ({ postId, commentId, text }, token) => {
  const form = new FormData()
  form.append("post_id", postId)
  form.append("parent_id", commentId)
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
            [json._id]: {
              ...json,
              id: json._id,
              user: json.user_id
            }
          }
        }
      }
      return result
    })
}
