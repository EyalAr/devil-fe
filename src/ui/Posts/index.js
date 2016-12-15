import React from "react"
import LinearProgress from "material-ui/LinearProgress"
import { List } from "material-ui/List"
import PostEntry from "../PostEntry"
import Message from "../Message"

const Posts = props => (
  <div>
    { props.pending && <LinearProgress mode="indeterminate"/> }
    { !props.pending && props.error && <Message>{props.error}</Message> }
    { !props.pending && !props.error && (
      <List>
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
      </List>
    ) }
  </div>
)

Posts.displayName = "UI/Posts"

export default Posts
