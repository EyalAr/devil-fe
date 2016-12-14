import React from "react"
import { Route, IndexRedirect, Redirect } from "react-router"
import App from "../containers/App"
import Post from "../containers/Post"
import User from "../containers/User"
import Posts from "../containers/Posts"
import Login from "../containers/Login"

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/posts/1/top"/>
    <Route path="/posts/:page/:sort" component={Posts}/>
    <Route path="/post/:id/:page/:mode/:sort" component={Post}/>
    <Redirect from="/post/:id" to="/post/:id/1/tree/top"/>
    <Route path="/user/:id/:page/:sort" component={User}/>
    <Redirect from="/user/:id" to="/user/:id/1/top"/>
    <Route path="/login/:token" component={Login}/>
  </Route>
)
