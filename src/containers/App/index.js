import { connect } from "react-redux"
import logout from "../../actions/logout"
import toggleSubmitPost from "../../actions/toggleSubmitPost"
import toggleLogin from "../../actions/toggleLogin"
import toggleRegister from "../../actions/toggleRegister"
import apiSubmitPostRequest from "../../actions/apiSubmitPostRequest"
import AppUI from "../../ui/App"

const mapStateToProps = state => {
  return {
    loggedIn: !!state.data.get("token"),
    user: state.data.get("user").toJS(),
    submitPostVisible: state.data.getIn(["views", "submitPost", "visible"]),
    loginVisible: state.data.getIn(["views", "login", "visible"]),
    registerVisible: state.data.getIn(["views", "register", "visible"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleSubmitPost: () => dispatch(toggleSubmitPost()),
    toggleLogin: () => dispatch(toggleLogin()),
    toggleRegister: () => dispatch(toggleRegister())
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI)

App.displayName = "Containers/App"

export default App
