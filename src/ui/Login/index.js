import React from "react"
import { Link } from "react-router"

const ENTER_KEY = 13

const Login = props => {
  var token = ""
  var email = ""
  const onTokenKeyPress = e => {
    if (e.keyCode === ENTER_KEY) props.login(token)
  }
  const onTokenChange = e => token = e.target.value
  const onEmailKeyPress = e => {
    if (e.keyCode === ENTER_KEY) props.getToken(email)
  }
  const onEmailChange = e => email = e.target.value

  return (
    props.loading ?
      <div>Loading...</div> :
      props.loggedIn ?
        <div>You're already logged in.</div> :
        <div>
          <div>{props.loginError || "Hello"}</div>
          <input placeholder="Enter your login token" onKeyPress={onTokenKeyPress} onChange={onTokenChange}/>
          <button onClick={() => props.login(token)}>Login</button>
          <div>Or:</div>
          <input placeholder="Enter your email" onKeyPress={onEmailKeyPress} onChange={onEmailChange}/>
          <button onClick={() => props.getToken(email)}>Get token by email</button>
          <div>Or:</div>
          <div><Link to="/register">Register</Link></div>
        </div>
  )
}

Login.displayName = "UI/Login"

export default Login
