import React from "react"
import { Link } from "react-router"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import FontIcon from "material-ui/FontIcon"
import TextButton from "../TextButton"
import TimeAgo from "react-timeago"
import Markdown from "../Markdown"
import SubmitText from "../SubmitText"
import style from "./style.css"

const Comment = props => (
  <Card className={style.container} expanded={props.expanded && props.children.length > 0}>
    <CardHeader
      className={style.header}
      showExpandableButton={props.children.length > 0}
      title={
        <span>
          <Link to={`/user/${props.user.id}`}>{props.user.name}</Link> |&nbsp;
          <TimeAgo date={props.createdAt}/> |&nbsp;
          <TextButton label="Reply" onClick={() => props.submitReplyCbs.onVisibleToggle(props.id)}/>
        </span>
      }
      closeIcon={
        <FontIcon
          className="material-icons"
          onClick={() => props.toggleExpanded(props.id)}>add_circle_outline</FontIcon>
      }
      openIcon={
        <FontIcon
          className="material-icons"
          onClick={() => props.toggleExpanded(props.id)}>remove_circle_outline</FontIcon>
      }/>
    { props.submitReplyView.visible &&
      <CardText className={style.content}>
        <SubmitText
          {...props.submitReplyView}
          onChange={text => props.submitReplyCbs.onChange(props.id, text)}
          onPreviewToggle={() => props.submitReplyCbs.onPreviewToggle(props.id)}
          onSubmit={text => props.submitReplyCbs.onSubmit(props.id, text)}
          size={5} maxSize={10}
          id={`submit-reply-${props.id}`}/>
      </CardText> }
    <CardText className={style.content}>
      <Markdown source={props.text}/>
      {props.expanded && props.children && props.children.map(c => (
        <Comment
          key={c.id}
          id={c.id}
          text={c.text}
          createdAt={c.createdAt}
          user={c.user}
          children={c.children}
          expanded={c.view.expanded}
          submitReplyView={c.view.submitReply}
          submitReplyCbs={props.submitReplyCbs}
          toggleExpanded={props.toggleExpanded}/>
      ))}
    </CardText>
  </Card>
)

Comment.displayName = "UI/Comment"

export default Comment
