import { connect } from "react-redux"
import AppUI from "../ui/App"

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI)

App.displayName = "Containers/App"

export default App
