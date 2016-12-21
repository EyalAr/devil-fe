import React from "react"
import LinearProgress from "../../lib/LinearProgress"
import PostEntry from "../../comps/PostEntry"
import Message from "../../lib/Message"

const Posts = props => (
  <div>
    { props.pending && <LinearProgress/> }
    { !props.pending && props.error && <Message error>{props.error}</Message> }
    { !props.pending && !props.error && (
      <div>
        {props.posts.map(p => (
          <PostEntry
            key={p.id}
            id={p.id}
            url={p.url}
            title={p.title}
            user={p.user}
            numComments={p.numComments}
            gotoPost={props.gotoPost}/>
        ))}
      </div>
    ) }
  </div>
)

Posts.displayName = "UI/views/Posts"

export default Posts
