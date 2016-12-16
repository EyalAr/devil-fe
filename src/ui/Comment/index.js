import React from "react"
import { Link } from "react-router"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import FontIcon from "material-ui/FontIcon"
import FlatButton from "material-ui/FlatButton"
import Markdown from "react-markdown"
import style from "./style.css"

const Comment = props => (
  <Card expanded={props.expanded && props.children.length > 0}>
    <CardHeader
      showExpandableButton={true}
      title={
        <Link to={`/user/${props.user.id}`}>{props.user.name}</Link>
      }
      closeIcon={
        <FontIcon
          className="material-icons"
          onClick={() => props.toggleExpanded(props.id)}>arrow_drop_down</FontIcon>
      }
      openIcon={
        <FontIcon
          className="material-icons"
          onClick={() => props.toggleExpanded(props.id)}>arrow_drop_up</FontIcon>
      }/>
    <CardText>
      <Markdown className={style.content} source={props.text} escapeHtml={true}/>
      {props.expanded && props.children && props.children.map(c => (
        <Comment
          key={c.id}
          id={c.id}
          text={c.text}
          user={c.user}
          children={c.children}
          expanded={c.view.expanded}
          toggleExpanded={props.toggleExpanded}/>
      ))}
    </CardText>
    <CardActions>
      <FlatButton label="Reply"/>
    </CardActions>
  </Card>
)

Comment.displayName = "UI/Comment"

export default Comment
