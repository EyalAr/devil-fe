import { connect } from "react-redux"
import logout from "../../actions/logout"
import toggleSubmitPost from "../../actions/toggleSubmitPost"
import apiSubmitPostRequest from "../../actions/apiSubmitPostRequest"
import AppUI from "../../ui/App"

const mapStateToProps = state => {
  return {
    loggedIn: state.data.get("token"),
    user: state.data.get("user").toJS(),
    submitPostView: state.data.getIn(["views", "submitPost"]).toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleSubmitPost: () => dispatch(toggleSubmitPost()),
    submitPost: (title, url) => dispatch(apiSubmitPostRequest(title, url))
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI)

App.displayName = "Containers/App"

export default App
