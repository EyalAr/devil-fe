import React from "react"
import { connect } from "react-redux"
import RegisterUI from "../../ui/views/Register"
import apiRegisterRequest from "../../actions/apiRegisterRequest"
import toggleRegister from "../../actions/toggleRegister"

const mapStateToProps = (state, props) => {
  const data = state.data
  const registerView = data.getIn(["views", "register"])
  const error = registerView.get("error")
  const pending = registerView.get("pending")
  const received = registerView.get("received")
  return { error, pending, received }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (email, name) => dispatch(apiRegisterRequest(email, name)),
    toggleRegister: () => dispatch(toggleRegister())
  }
}

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUI)

Register.displayName = "Containers/Register"

export default Register
