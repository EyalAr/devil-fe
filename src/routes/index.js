import React from "react"
import { Route, IndexRedirect } from "react-router"
import App from "../ui/App"
import About from "../ui/About"
import SignIn from "../ui/SignIn"
import Post from "../ui/Post"
import Posts from "../ui/Posts"

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/posts/1/top"/>
    <Route path="/posts/:page/:sort" component={Posts}/>
    <Route path="/post/:id/:page/:mode/:sort" component={Post}/>
    <Route path="/signIn/:token" component={SignIn}/>
    <Route path="/about" component={About}/>
  </Route>
)
