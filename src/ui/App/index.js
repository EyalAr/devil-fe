import React from "react"
import { Link } from "react-router"
import SubmitPost from "../SubmitPost"

const App = props => (
  <div>
    <div>
      DevIL: hello {props.user ? props.user.name : "guest"},
      <Link to="/posts/1/top">All Posts</Link>,
      {props.loggedIn ? <a onClick={props.toggleSubmitPost}>Submit Post,</a> : null}
      {
        props.loggedIn ?
          <a onClick={props.logout}>Logout</a> :
          <Link to="/login">Login</Link>
      }
    </div>
    {props.children}
    {
      props.loggedIn && props.submitPostView.visible ?
        <SubmitPost
          pending={props.submitPostView.pending}
          error={props.submitPostView.submitError}
          submit={props.submitPost}/> :
        null
    }
  </div>
)

App.displayName = "UI/App"

export default App
