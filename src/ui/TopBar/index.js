import React from "react"
import { Link } from "react-router"

const TopBar = props => (
  <div>
    DevIL: hello {props.user ? props.user.name : "guest"},
    <Link to="/posts/1/top">All Posts</Link>,
    {props.loggedIn ? <a onClick={props.toggleSubmitPost}>Submit Post,</a> : null}
    {
      props.loggedIn ?
        <a onClick={props.logout}>Logout</a> :
        <span>
          <a onClick={props.toggleLogin}>Login</a>
          <a onClick={props.toggleRegister}>Register</a>
        </span>
    }
  </div>
)

TopBar.displayName = "UI/TopBar"

export default TopBar
