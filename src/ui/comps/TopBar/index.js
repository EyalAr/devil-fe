import React from "react"
import classnames from "classnames/bind"
import TextButton from "../../lib/TextButton"
import Buttons from "./Buttons"
import style from "./style.less"

const cx = classnames.bind(style)

const TopBar = props => (
  <div className={cx("container", props.className)}>
    <TextButton
      className={cx("hamburger", "mobile-only")}
      onClick={props.toggleMobileMenu}>
        <i className="material-icons">menu</i>
    </TextButton>
    <span className={cx("title")}>
      {"DevIL" + (props.loggedIn ? ` [${props.user.name}]` : "")}
    </span>
    <Buttons {...props} className={cx("no-mobile", "buttonsContainer")}/>
  </div>
)

TopBar.displayName = "UI/comps/TopBar"

export default TopBar
