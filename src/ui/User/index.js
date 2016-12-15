import React from "react"
import LinearProgress from "material-ui/LinearProgress"
import { List } from "material-ui/List"
import PostEntry from "../PostEntry"
import Message from "../Message"

const User = props => (
  <div>
    { props.pending && <LinearProgress mode="indeterminate"/> }
    { !props.pending && props.error && <Message>{props.error}</Message> }
    { !props.pending && !props.error && <Message>Posts by {props.name}</Message>}
    { !props.pending && !props.error && (
      <List>
        {props.posts.map(p => (
          <PostEntry
            key={p.id}
            id={p.id}
            url={p.url}
            title={p.title}
            user={false}
            numComments={p.numComments}
            gotoPost={props.gotoPost}/>
        ))}
      </List>
    ) }
  </div>
)

User.displayName = "UI/User"

export default User
