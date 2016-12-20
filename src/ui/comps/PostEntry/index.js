import React from "react"
import { Link } from "react-router"
import TextButton from "../../lib/TextButton"
import style from "./style.less"

const ENTER_KEY = 13

const PostEntry = props => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <a href={props.url}>{props.title}</a>
      </div>
      <div className={style.subtitle}>
        { props.user && <Link to={`/user/${props.user.id}`}>By {props.user.name}</Link> }
        { props.user && <span> | </span> }
        <TextButton onClick={() => props.gotoPost(props.id)}>
          {props.numComments} comment{props.numComments !== 1 ? "s" : ""}
        </TextButton>
      </div>
    </div>
  )
}

PostEntry.displayName = "UI/comps/PostEntry"

export default PostEntry
