import React from "react"
import classnames from "classnames/bind"
import TextButton from "../../lib/TextButton"
import Buttons from "./Buttons"
import style from "./style.less"

const cx = classnames.bind(style)

const TopBar = props => (
  <div className={cx("container", props.className)}>
    <TextButton className={cx("element", "hamburger", "touch-only")}>&#9776;</TextButton>
    <span className={cx("title")}>
      {"DevIL" + (props.loggedIn ? ` [${props.user.name}]` : "")}
    </span>
    <Buttons {...props} className={cx("desktop-only")}/>
  </div>
)

TopBar.displayName = "UI/comps/TopBar"

export default TopBar
