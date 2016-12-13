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
            props.posts.map(p => (
              <li key={p.id}>
                <a href={p.url}>{p.title}</a>
                <Link to={`/post/${p.id}`}>[comments]</Link>
                (<Link to={`/user/${p.user.id}`}>{p.user.name}</Link>)
              </li>
            ))
          }
        </ol>
    }
  </div>
)

Posts.displayName = "UI/Posts"

export default Posts
