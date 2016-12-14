import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Login from "../../containers/Login"
import Register from "../../containers/Register"
import SubmitPost from "../../containers/SubmitPost"
import TopBar from "../TopBar"
import ModalWrapper from "../ModalWrapper"
import style from "./style.css"

const App = props => (
  <MuiThemeProvider>
    <div className={style.container}>
      <TopBar
        loggedIn={props.loggedIn}
        user={props.user}
        toggleSubmitPost={props.toggleSubmitPost}
        toggleLogin={props.toggleLogin}
        toggleRegister={props.toggleRegister}
        logout={props.logout}/>
      {props.children}
      <ModalWrapper
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
      </ModalWrapper>
    </div>
  </MuiThemeProvider>
)

App.displayName = "UI/App"

export default App
