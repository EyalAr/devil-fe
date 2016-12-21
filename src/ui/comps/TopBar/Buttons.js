import React from "react"
import { Link } from "react-router"
import classnames from "classnames/bind"
import TextButton from "../../lib/TextButton"
import style from "./style.less"

const cx = classnames.bind(style)

const Divider = () => (
  <span className={cx("button", "desktop-only")}> | </span>
)

const TopBarButtons = props => (
  <span className={cx(props.className)}>
    <span className={cx("scrollContainer")}>
      <TextButton
        className={cx("button")}
        onClick={props.loggedIn ? props.toggleSubmitPost : props.toggleLogin}>
          Submit
      </TextButton>
      <Divider/>
      <Link className={cx("button")} to="/posts/1/top">All Posts</Link>
      <Divider/>
      { props.loggedIn &&
        <Link className={cx("button")} to={`/user/${props.user.id}`}>Profile</Link> }
      { props.loggedIn && <Divider/> }
      { props.loggedIn &&
        <TextButton className={cx("button")} onClick={props.logout}>Logout</TextButton> }
      { !props.loggedIn &&
        <TextButton className={cx("button")} onClick={props.toggleLogin}>Login</TextButton> }
      { !props.loggedIn && <Divider/> }
      { !props.loggedIn &&
        <TextButton className={cx("button")} onClick={props.toggleRegister}>Register</TextButton> }
    </span>
  </span>
)

TopBarButtons.displayName = "UI/comps/TopBar/Buttons"

export default TopBarButtons
