import React from "react"
import { Link } from "react-router"
import Comment from "../Comment"

const Post = props => (
  props.loading ?
    <div>Loading...</div> :
    props.loadingError ?
      <div>{props.loadingError}</div> :
      <div>
        <h1><a href={props.url}>{props.title}</a></h1>
        By: <Link to={`/user/${props.user.id}`}>{props.user.name}</Link>
        <h2>Comments:</h2>
        <ol>
          {
            props.comments.map(c => {
              var expanded = true
              return (
                <Comment
                  key={c.id}
                  id={c.id}
                  text={c.text}
                  user={c.user}
                  children={c.children}
                  expanded={c.expanded}
                  toggleExpanded={props.toggleExpandedComment}/>
              )
            })
          }
        </ol>
      </div>
)

Post.displayName = "UI/Post"

export default Post
