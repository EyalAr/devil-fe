import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { hashHistory } from "react-router"
// import { syncHistoryWithStore } from "react-router-redux"
import routes from "./routes"
import configureStore from "./store/configureStore"
import Root from "./containers/root"
import INITIAL_STATE from "./initialState"

const store = configureStore(INITIAL_STATE)
// const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Root routes={routes} history={hashHistory} store={store}/>,
  document.getElementById("app-root")
)
