import React from "react"
import { Link } from "react-router"
import TimeAgo from "react-timeago"
import { Card, CardMainContent, CardExtraContent } from "../../lib/Card"
import TextButton from "../../lib/TextButton"
import Markdown from "../../lib/Markdown"
import SubmitText from "../SubmitText"
import style from "./style.less"

const SHORT_TIME_UNITS = {
  "second": "s",
  "minute": "m",
  "hour": "h",
  "day": "d",
  "week": "w",
  "month": "mth",
  "year": "yr"
}
const timeAgoFormatter = (value, unit, suffix, date) => `${value}${SHORT_TIME_UNITS[unit]}`

const Comment = props => (
  <Card expanded={props.expanded}>
    <CardMainContent>
      <TextButton className={style.expander} onClick={() => props.toggleExpanded(props.id)}>
        {props.expanded ? "[-]" : "[+]"}
      </TextButton>
      <span>
        <Link className={style.titleElement} to={`/user/${props.user.id}`}>{props.user.name}</Link>
        <TimeAgo className={`mobile-only ${style.titleElement}`} date={props.createdAt} formatter={timeAgoFormatter}/>
        <TimeAgo className={`no-mobile ${style.titleElement}`} date={props.createdAt}/>
        { props.expanded &&
          <TextButton
            className={style.titleElement}
            onClick={() => props.submitReplyCbs.onVisibleToggle(props.id)}>
              <span className="no-mobile">Reply</span>
              <span className="mobile-only">[R]</span>
          </TextButton> }
      </span>
    </CardMainContent>
    { props.submitReplyView.visible &&
      <CardMainContent>
        <SubmitText
          {...props.submitReplyView}
          onChange={text => props.submitReplyCbs.onChange(props.id, text)}
          onPreviewToggle={() => props.submitReplyCbs.onPreviewToggle(props.id)}
          onSubmit={text => props.submitReplyCbs.onSubmit(props.id, text)}
          multiline={true}
          size={5}
          className={style.commentWrapper}/>
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
