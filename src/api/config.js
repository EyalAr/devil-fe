import { Schema, arrayOf } from "normalizr"

const combine = (...funcs) => {
  return (o, key, val) => funcs.forEach(f => f(o, key, val))
}

const assignId = (o, key, val) => {
  if (key === "_id") { o.id = val }
}

const assignNumComments = (o, key, val) => {
  if (key === "num_comments") { o.numComments = val }
}

export const HOST = "https://yafo.herokuapp.com/"
export const POST_SCHEMA = new Schema("posts", { idAttribute: "_id", assignEntity: combine(assignId, assignNumComments) })
export const USER_SCHEMA = new Schema("users", { idAttribute: "_id", assignEntity: assignId })
export const COMMENT_SCHEMA = new Schema("comments", { idAttribute: "_id", assignEntity: assignId })
export const POSTS_LIST_SCHEMA = new Schema("postsLists", { idAttribute: () => "main_list" })

POSTS_LIST_SCHEMA.define({
  posts: arrayOf(POST_SCHEMA)
})

POST_SCHEMA.define({
  comments: arrayOf(COMMENT_SCHEMA),
  user: USER_SCHEMA
})

COMMENT_SCHEMA.define({
  children: arrayOf(COMMENT_SCHEMA),
  user: USER_SCHEMA
})
