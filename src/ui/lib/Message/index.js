import React from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const Message = ({ children, error, warning, className }) => (
  <div className={cx("container", { error, warning: warning && !error })}>
    { error && <i className="material-icons">error</i> }
    { warning && !error && <i className="material-icons">warning</i> }
    { !warning && !error && <i className="material-icons">info</i> }
    <span className={cx("content", "no-mobile")}>{children}</span>
  </div>
)

Message.displayName = "UI/lib/Message"

export default Message
