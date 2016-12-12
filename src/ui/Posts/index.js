import React from "react"
import { Link } from "react-router"

const Posts = props => (
  <div>
    <h1>Posts</h1>
    {
      props.loading ?
        "Loading..." :
        <ol>
          {
            props.loaded.map(p => (
              <li key={p.id}>
                <Link to={`/post/${p.id}`}>{p.title}</Link>
                (<Link to={`/user/${p.user.id}`}>{p.user.username}</Link>)
              </li>
            ))
          }
        </ol>
    }
  </div>
)

Posts.displayName = "UI/Posts"

export default Posts
