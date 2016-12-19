import React from "react"
import { Link } from "react-router"
import { ListItem } from "material-ui/List"
import style from "./style.css"

const ENTER_KEY = 13

const PostEntry = props => {
  return (
    <ListItem onClick={() => props.gotoPost(props.id)}>
      <div className={style.title}>
        <a href={props.url}>{props.title}</a>
      </div>
      <div className={style.subtitle}>
        { props.user && <Link to={`/user/${props.user.id}`}>By {props.user.name}</Link> }
        { props.user && <span> | </span> }
        <span>{props.numComments} comment{props.numComments !== 1 ? "s" : ""}</span>
      </div>
    </ListItem>
  )
}

PostEntry.displayName = "UI/comps/PostEntry"

export default PostEntry
