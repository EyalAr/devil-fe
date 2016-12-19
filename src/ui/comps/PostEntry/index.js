import React from "react"
import { Link } from "react-router"
import style from "./style.css"

const ENTER_KEY = 13

const PostEntry = props => {
  return (
    <div onClick={() => props.gotoPost(props.id)}>
      <div className={style.title}>
        <a href={props.url}>{props.title}</a>
      </div>
      <div className={style.subtitle}>
        { props.user && <Link to={`/user/${props.user.id}`}>By {props.user.name}</Link> }
        { props.user && <span> | </span> }
        <span>{props.numComments} comment{props.numComments !== 1 ? "s" : ""}</span>
      </div>
    </div>
  )
}

PostEntry.displayName = "UI/comps/PostEntry"

export default PostEntry
