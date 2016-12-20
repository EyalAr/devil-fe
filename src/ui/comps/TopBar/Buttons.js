import React from "react"
import { Link } from "react-router"
import classnames from "classnames/bind"
import { Menu, MenuItem } from "../../lib/Menu"
import TextButton from "../../lib/TextButton"
import style from "./style.less"

const cx = classnames.bind(style)

const TopBarMenu = props => {
  const ProfileItem = <MenuItem key="profile"><Link to={`/user/${props.user.id}`}>Profile</Link></MenuItem>
  const LogoutItem = <MenuItem key="logout"><TextButton onClick={props.logout}>Logout</TextButton></MenuItem>
  const LoginItem = <MenuItem key="login"><TextButton onClick={props.toggleLogin}>Login</TextButton></MenuItem>
  const RegisterItem = <MenuItem key="register"><TextButton onClick={props.toggleRegister}>Register</TextButton></MenuItem>
  return (
    <Menu
      className={props.className}
      anchorClosed={<TextButton>Menu &rarr;</TextButton>}
      anchorOpened={<TextButton>Menu &larr;</TextButton>}>
        { props.loggedIn && ProfileItem }
        { props.loggedIn && LogoutItem }
        { !props.loggedIn && LoginItem }
        { !props.loggedIn && RegisterItem }
    </Menu>
  )
}

TopBarMenu.displayName = "UI/TopBar/Menu"

const TopBarButtons = props => (
  <span className={props.className}>
    <TextButton
      className={cx("element")}
      onClick={props.loggedIn ? props.toggleSubmitPost : props.toggleLogin}>
        Submit
    </TextButton>
    <span className={cx("element")}> | </span>
    <Link className={cx("element")} to="/posts/1/top">All Posts</Link>
    <span className={cx("element")}> | </span>
    <TopBarMenu
      className={cx("element")}
      loggedIn={props.loggedIn}
      user={props.user}
      toggleLogin={props.toggleLogin}
      toggleRegister={props.toggleRegister}
      logout={props.logout}/>
  </span>
)

TopBarButtons.displayName = "UI/comps/TopBar/Buttons"

export default TopBarButtons
