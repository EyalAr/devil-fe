import React from "react"
import { Link } from "react-router"

const User = props => (
  props.loading ?
    <div>Loading...</div> :
    <div>
      <h1>{props.username}</h1>
      <h2>Posts:</h2>
      <ol>
        {
          props.posts.map(p => (
            <li key={p.id}>
              <Link to={`/post/${p.id}`}>{p.title}</Link>
            </li>
          ))
        }
      </ol>
    </div>
)

User.displayName = "UI/User"

export default User
