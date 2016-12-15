import React from "react"
import style from "./style.css"

const Message = props => (<div className={style.message}>{props.children}</div>)

Message.displayName = "UI/Message"

export default Message
