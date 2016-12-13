import React from "react"
import { Link } from "react-router"

const Comment = props => (
  <div>
    <div>
      <span onClick={() => props.toggleExpanded(props.id)}>[{props.expanded ? "-" : "+"}]</span>
      {props.text}
      (<Link to={`/user/${props.user.id}`}>{props.user.name}</Link>)
    </div>
    {
      props.expanded && props.children ? <ol>{
        props.children.map(c => {
          var expanded = true
          return (
            <Comment
              key={c.id}
              id={c.id}
              text={c.text}
              user={c.user}
              children={c.children}
              expanded={c.expanded}
              toggleExpanded={props.toggleExpanded}/>
          )
        })
      }</ol> : null
    }
  </div>
)

Comment.displayName = "UI/Comment"

export default Comment
