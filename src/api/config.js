import { Schema, arrayOf } from "normalizr"

const assignId = (o, key, val) => {
  if (key === "_id") { o.id = val }
}

export const HOST = "http://yafo.herokuapp.com/"
export const POST_SCHEMA = new Schema("posts", { idAttribute: "_id", assignEntity: assignId })
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
