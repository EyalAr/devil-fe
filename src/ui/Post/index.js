import React from "react"
import { Link } from "react-router"
import LinearProgress from "material-ui/LinearProgress"
import FlatButton from "material-ui/FlatButton"
import Comment from "../Comment"
import SubmitText from "../SubmitText"
import Message from "../Message"
import style from "./style.css"

const Post = props => (
  <div>
    { props.pending && <LinearProgress mode="indeterminate"/> }
    { !props.pending && props.error && <Message>{props.error}</Message> }
    { !props.pending && !props.error && (
      <div>
        <div className={style.title}>
          <a href={props.url}>{props.title}</a>
        </div>
        <div className={style.subtitle}>
          By <Link to={`/user/${props.user.id}`}>{props.user.name}</Link>
        </div>
        <FlatButton label="Comment" onClick={() => props.submitCommentCbs.onVisibleToggle(props.params.id)}/>
        <br/>
        { props.submitCommentView.visible &&
          <SubmitText
            {...props.submitCommentView}
            {...props.submitCommentCbs}
            size={10} maxSize={20}
            id={`submit-comment-${props.params.id}`}/> }
        {props.comments.map(c => (
          <Comment
            key={c.id}
            id={c.id}
            text={c.text}
            user={c.user}
            children={c.children}
            expanded={c.expanded}
            toggleExpanded={props.toggleExpandedComment}/>
        ))}
      </div>
    ) }
  </div>
)

Post.displayName = "UI/Post"

export default Post
