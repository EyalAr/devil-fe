import React from "react"
import classnames from "classnames/bind"
import Buttons from "./Buttons"
import style from "./style.less"

const cx = classnames.bind(style)

const TopBar = props => (
  <div className={props.className}>
    <span className={cx("title")}>
      {"DevIL" + (props.loggedIn ? ` [${props.user.name}]` : "")}
    </span>
    <Buttons {...props} className={cx(props.className, "desktop-only")}/>
  </div>
)

TopBar.displayName = "UI/comps/TopBar"

export default TopBar
