import React from "react"
import { Link } from "react-router"
import { Menu, MenuItem } from "../../lib/Menu"
import TextButton from "../../lib/TextButton"

const TopBarMenu = props => {
  const ProfileItem = <MenuItem key="profile"><Link to={`/user/${props.user.id}`}>Profile</Link></MenuItem>
  const LogoutItem = <MenuItem key="logout"><TextButton onClick={props.logout}>Logout</TextButton></MenuItem>
  const LoginItem = <MenuItem key="login"><TextButton onClick={props.toggleLogin}>Login</TextButton></MenuItem>
  const RegisterItem = <MenuItem key="register"><TextButton onClick={props.toggleRegister}>Register</TextButton></MenuItem>
  return (
    <Menu anchor={<span>Menu</span>}>
      { props.loggedIn && ProfileItem }
      { props.loggedIn && LogoutItem }
      { !props.loggedIn && LoginItem }
      { !props.loggedIn && RegisterItem }
    </Menu>
  )
}

TopBarMenu.displayName = "UI/TopBar/Menu"

const TopBar = props => (
  <div>
    <span>{"DevIL" + (props.loggedIn ? " | " + props.user.name : "")}</span>
    <TextButton onClick={props.loggedIn ? props.toggleSubmitPost : props.toggleLogin}>Submit</TextButton>
    <Link to="/posts/1/top">All Posts</Link>
    <TopBarMenu
      loggedIn={props.loggedIn}
      user={props.user}
      toggleLogin={props.toggleLogin}
      toggleRegister={props.toggleRegister}
      logout={props.logout}/>
  </div>
)

TopBar.displayName = "UI/comps/TopBar"

export default TopBar
