import React from "react"
import LinearProgress from "../../lib/LinearProgress"
import PostEntry from "../../comps/PostEntry"
import Message from "../../lib/Message"

const User = props => (
  <div>
    { props.pending && <LinearProgress mode="indeterminate"/> }
    { !props.pending && props.error && <Message>{props.error}</Message> }
    { !props.pending && !props.error && <Message>Posts by {props.name}</Message>}
    { !props.pending && !props.error && (
      <div>
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
      </div>
    ) }
  </div>
)

User.displayName = "UI/views/User"

export default User
