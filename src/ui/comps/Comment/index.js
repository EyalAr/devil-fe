import React from "react"
import { Link } from "react-router"
import TimeAgo from "react-timeago"
import { Card, CardMainContent, CardExtraContent } from "../../lib/Card"
import TextButton from "../../lib/TextButton"
import Markdown from "../../lib/Markdown"
import SubmitText from "../SubmitText"

const Comment = props => (
  <Card expanded={props.expanded && props.children.length > 0}>
    <CardMainContent>
      <span>
        <Link to={`/user/${props.user.id}`}>{props.user.name}</Link> |&nbsp;
        <TimeAgo date={props.createdAt}/> |&nbsp;
        <TextButton onClick={() => props.submitReplyCbs.onVisibleToggle(props.id)}>Reply</TextButton>
      </span>
      <TextButton onClick={() => props.toggleExpanded(props.id)}>
        {props.expanded ? "[-]" : "[+]"}
      </TextButton>
    </CardMainContent>
    { props.submitReplyView.visible &&
      <CardMainContent>
        <SubmitText
          {...props.submitReplyView}
          onChange={text => props.submitReplyCbs.onChange(props.id, text)}
          onPreviewToggle={() => props.submitReplyCbs.onPreviewToggle(props.id)}
          onSubmit={text => props.submitReplyCbs.onSubmit(props.id, text)}
          size={5} maxSize={10}
          id={`submit-reply-${props.id}`}/>
      </CardMainContent> }
    <CardExtraContent>
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
    </CardExtraContent>
  </Card>
)

Comment.displayName = "UI/comps/Comment"

export default Comment
