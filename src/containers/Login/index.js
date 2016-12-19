import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import LoginUI from "../../ui/views/Login"
import apiLoginRequest from "../../actions/apiLoginRequest"
import apiGetTokenRequest from "../../actions/apiGetTokenRequest"
import toggleRegister from "../../actions/toggleRegister"
import toggleLogin from "../../actions/toggleLogin"

class LoginContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { params, login, loggedIn } = this.props
    const { token } = params || {}
    if (token) login(token)
  }

  render () {
    return (
      <LoginUI {...this.props}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const loggedIn = !!data.get("token")
  const loginView = data.getIn(["views", "login"])
  const error = loginView.get("error")
  const pending = loginView.get("pending")
  const received = loginView.get("received")
  return { loggedIn, error, pending, received }
}

const mapDispatchToProps = dispatch => {
  return {
    login: token => dispatch(apiLoginRequest(token)),
    getToken: email => dispatch(apiGetTokenRequest(email)),
    toggleRegister: () => dispatch(toggleRegister()),
    toggleLogin: () => dispatch(toggleLogin())
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)

Login.displayName = "Containers/Login"

export default Login
