import React from "react"

const ENTER_KEY = 13

const Register = props => {
  var email = ""
  var name = ""
  const register = (email, name) => {
    if (email && name) props.register(email, name)
  }
  const onKeyPress = e => {
    if (e.keyCode === ENTER_KEY) register(email, name)
  }
  const onEmailChange = e => email = e.target.value
  const onNameChange = e => name = e.target.value

  return (
    props.pending ?
      <div>Please wait...</div> :
      props.error ?
        <div>{props.error}</div> :
        <div>
          {props.received && <div>You're request has been received. Please wait for an email from us.</div>}
          <div><input placeholder="Enter your email" onChange={onEmailChange} onKeyPress={onKeyPress} /></div>
          <div><input placeholder="Enter your name" onChange={onNameChange} onKeyPress={onKeyPress} /></div>
          <div><button onClick={() => register(email, name)}>Register</button></div>
        </div>
  )
}

Register.displayName = "UI/Register"

export default Register
