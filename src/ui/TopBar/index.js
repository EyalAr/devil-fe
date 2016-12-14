import React from "react"
import AppBar from "material-ui/AppBar"
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar"
import IconMenu from "material-ui/IconMenu"
import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import IconButton from "material-ui/IconButton"
import { Link } from "react-router"

const Menu = props => {
  const LinkToUser = <Link to={`/user/${props.user.id}`}/>
  const ProfileItem = <MenuItem primaryText="Profile" containerElement={ LinkToUser }/>
  const LogoutItem = <MenuItem primaryText="Logout" onClick={props.logout}/>
  const LoginItem = <MenuItem primaryText="Login" onClick={props.toggleLogin}/>
  const RegisterItem = <MenuItem primaryText="Register" onClick={props.toggleRegister}/>
  return (
    <IconMenu iconButtonElement={
      <IconButton iconClassName="material-icons">settings</IconButton>
    }>
      { props.loggedIn && ProfileItem }
      { props.loggedIn && LogoutItem }
      { !props.loggedIn && LoginItem }
      { !props.loggedIn && RegisterItem }
    </IconMenu>
  )
}

Menu.displayName = "UI/TopBar/Menu"

const TopBar = props => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <ToolbarTitle text={"DevIL" + (props.loggedIn ? " | " + props.user.name : "")}/>
      <RaisedButton
        label="Submit"
        onClick={props.loggedIn ? props.toggleSubmitPost : props.toggleLogin}/>
      <RaisedButton
        label="All Posts"
        containerElement={
          <Link to="/posts/1/top"/>
        }/>
    </ToolbarGroup>
    <ToolbarGroup>
      <Menu
        loggedIn={props.loggedIn}
        user={props.user}
        toggleLogin={props.toggleLogin}
        toggleRegister={props.toggleRegister}
        logout={props.logout}/>
    </ToolbarGroup>
  </Toolbar>
)

TopBar.displayName = "UI/TopBar"

export default TopBar
