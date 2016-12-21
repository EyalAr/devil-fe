import React from "react"
import classnames from "classnames/bind"
import Login from "../../../containers/Login"
import Register from "../../../containers/Register"
import SubmitPost from "../../../containers/SubmitPost"
import TopBar from "../../comps/TopBar"
import Buttons from "../../comps/TopBar/Buttons"
import { DialogMuxer, Dialog } from "../../lib/DialogMuxer"
import style from "./style.less"

const cx = classnames.bind(style)

const App = props => {
  return (
    <div className={cx("container")}>
      <TopBar
        className={cx("topBar")}
        loggedIn={props.loggedIn}
        user={props.user}
        toggleSubmitPost={props.toggleSubmitPost}
        toggleLogin={props.toggleLogin}
        toggleRegister={props.toggleRegister}
        toggleMobileMenu={props.toggleMobileMenu}
        logout={props.logout}/>
      <Buttons
        className={cx("mobile-only", "mobileMenu", { mobileMenuVisible: props.mobileMenuVisible })}
        loggedIn={props.loggedIn}
        user={props.user}
        toggleSubmitPost={props.toggleSubmitPost}
        toggleLogin={props.toggleLogin}
        toggleRegister={props.toggleRegister}
        logout={props.logout}/>
      <DialogMuxer className={cx("dialog", { mobileMenuVisible: props.mobileMenuVisible })} classNameInternal={cx("dialogInternal")}>
        <Dialog
          title="Submit Post"
          active={props.loggedIn && props.submitPostVisible}
          onClose={props.toggleSubmitPost}>
            <SubmitPost/>
        </Dialog>
        <Dialog
          title="Login"
          active={!props.loggedIn && props.loginVisible}
          onClose={props.toggleLogin}>
            <Login/>
        </Dialog>
        <Dialog
          title="Register"
          active={!props.loggedIn && props.registerVisible}
          onClose={props.toggleRegister}>
            <Register/>
        </Dialog>
      </DialogMuxer>
      <div className={cx("body")}>
        {props.children}
      </div>
    </div>
  )
}

App.displayName = "UI/views/App"

export default App
