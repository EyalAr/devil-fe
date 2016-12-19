import React from "react"
import classnames from "classnames/bind"
import Login from "../../../containers/Login"
import Register from "../../../containers/Register"
import SubmitPost from "../../../containers/SubmitPost"
import TopBar from "../../comps/TopBar"
import DialogWrapper from "../../lib/DialogWrapper"
import style from "./style.less"

const cx = classnames.bind(style)

const App = props => {
  const dialogVisible = props.submitPostVisible || props.loginVisible || props.registerVisible
  return (
    <div className={cx("container")}>
      <TopBar
        className={cx("topBar")}
        loggedIn={props.loggedIn}
        user={props.user}
        toggleSubmitPost={props.toggleSubmitPost}
        toggleLogin={props.toggleLogin}
        toggleRegister={props.toggleRegister}
        logout={props.logout}/>
      <div className={cx("body", { dialogVisible })}>
        {props.children}
      </div>
      <DialogWrapper
        className={cx("dialog", { dialogVisible })}
        onRequestClose={() => {
          if (props.loggedIn && props.submitPostVisible) props.toggleSubmitPost()
          if (!props.loggedIn && props.loginVisible) props.toggleLogin()
          if (!props.loggedIn && props.registerVisible) props.toggleRegister()
        }}
        title={
          props.loggedIn && props.submitPostVisible ? "Submit Post" :
          !props.loggedIn && props.loginVisible ? "Login" :
          !props.loggedIn && props.registerVisible ? "Register" :
          ""
        }>
        { props.loggedIn && props.submitPostVisible && <SubmitPost/> }
        { !props.loggedIn && props.loginVisible && <Login/> }
        { !props.loggedIn && props.registerVisible && <Register/> }
      </DialogWrapper>
    </div>
  )
}

App.displayName = "UI/views/App"

export default App
