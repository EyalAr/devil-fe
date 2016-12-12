import React from "react"
import { Link } from "react-router"

const App = props => (
  <div>
    <div>DevIL <Link to="/posts/1/top">All Posts</Link></div>
    {props.children}
  </div>
)

App.displayName = "UI/App"

export default App
