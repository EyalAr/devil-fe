import React from "react"
import { Link } from "react-router"
import LinearProgress from "material-ui/LinearProgress"
import FlatButton from "material-ui/FlatButton"
import Comment from "../Comment"
import SubmitText from "../SubmitText"
import Message from "../Message"
import PostPreview from "../PostPreview"
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
        <div className={style.buttonsWrapper}>
          <FlatButton label="Comment" onClick={() => {
            if (props.loggedIn) {
              props.submitCommentCbs.onVisibleToggle()
            } else {
              props.toggleLogin()
            }
          }}/>
          <FlatButton label="Preview" onClick={() => props.togglePreview(props.params.id)}/>
          <FlatButton label="Share" onClick={() => {}}/>
        </div>
        { props.preview && <PostPreview url={props.url} className={style.postPreview}/> }
        { props.submitCommentView.visible &&
          <SubmitText
            {...props.submitCommentView}
            {...props.submitCommentCbs}
            size={10} maxSize={20}
            id={`submit-comment-${props.params.id}`}/> }
        { props.comments.length > 0 && <div className={style.commentsWrapper}>
          { props.comments.map(c => (
            <Comment
              key={c.id}
              id={c.id}
              text={c.text}
              createdAt={c.createdAt}
              user={c.user}
              children={c.children}
              expanded={c.view.expanded}
              submitReplyView={c.view.submitReply}
              submitReplyCbs={{
                ...props.commentReplyCbs,
                onVisibleToggle: commentId => {
                  if (props.loggedIn) {
                    props.commentReplyCbs.onVisibleToggle(commentId)
                  } else {
                    props.toggleLogin()
                  }
                }
              }}
              toggleExpanded={props.toggleExpandedComment}/>
          ))}
          </div> }
      </div>
    ) }
  </div>
)

Post.displayName = "UI/Post"

export default Post
