import React from "react"
import { Route, IndexRedirect } from "react-router"
import App from "../containers/App"
import About from "../containers/About"
import SignIn from "../containers/SignIn"
import Post from "../containers/Post"
import Posts from "../containers/Posts"

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/posts/1/top"/>
    <Route path="/posts/:page/:sort" component={Posts}/>
    <Route path="/post/:id/:page/:mode/:sort" component={Post}/>
    <Route path="/signIn/:token" component={SignIn}/>
    <Route path="/about" component={About} name={"eyal"}/>
  </Route>
)
