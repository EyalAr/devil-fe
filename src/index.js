import "babel-polyfill"
import "isomorphic-fetch"
import React from "react"
import ReactDOM from "react-dom"
import routes from "./routes"
import Root from "./containers/root"
import history from "./history"
import store from "./store"

ReactDOM.render(
  <Root routes={routes} history={history} store={store}/>,
  document.getElementById("app-root")
)
