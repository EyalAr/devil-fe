import React from "react"
import { Link } from "react-router"

const Post = props => (
  props.loading ?
    <div>Loading...</div> :
    <div>
      <h1>{props.title}</h1>
      By: <Link to={`/user/${props.user.id}`}>{props.user.username}</Link>
      <h2>Comments:</h2>
      <ol>
        {
          props.loaded.map(c => (
            <li key={c.id}>
              {c.content}
              (<Link to={`/user/${c.user.id}`}>{c.user.username}</Link>)
            </li>
          ))
        }
      </ol>
    </div>
)

Post.displayName = "UI/Post"

export default Post
