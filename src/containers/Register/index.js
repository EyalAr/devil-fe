import React from "react"
import { connect } from "react-redux"
import RegisterUI from "../../ui/Register"
import apiRegisterRequest from "../../actions/apiRegisterRequest"
import toggleRegister from "../../actions/toggleRegister"

const mapStateToProps = (state, props) => {
  const data = state.data
  const error = data.getIn(["views", "register", "error"])
  const pending = data.getIn(["views", "register", "pending"])
  const received = data.getIn(["views", "register", "received"])
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
