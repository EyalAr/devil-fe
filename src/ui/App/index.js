import React from "react"
import Login from "../../containers/Login"
import Register from "../../containers/Register"
import SubmitPost from "../../containers/SubmitPost"
import TopBar from "../TopBar"
import ModalWrapper from "../ModalWrapper"

const App = props => (
  <div>
    <TopBar
      loggedIn={props.loggedIn}
      user={props.user}
      toggleSubmitPost={props.toggleSubmitPost}
      toggleLogin={props.toggleLogin}
      toggleRegister={props.toggleRegister}
      logout={props.logout}/>
    {props.children}
    <ModalWrapper>
      { props.loggedIn && props.submitPostVisible && <SubmitPost/> }
      { !props.loggedIn && props.loginVisible && <Login/> }
      { !props.loggedIn && props.registerVisible && <Register/> }
    </ModalWrapper>
  </div>
)

App.displayName = "UI/App"

export default App
