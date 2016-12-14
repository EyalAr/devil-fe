import React from "react"
import isemail from "validator/lib/isEmail"
import { Link } from "react-router"
import LinearProgress from "material-ui/LinearProgress"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import style from "./style.css"

const ENTER_KEY = 13

const Login = props => {
  var value = ""

  const submit = () => value ? isemail(value) ? props.getToken(value) : props.login(value) : null
  const onKeyPress = e => e.keyCode === ENTER_KEY && submit()
  const onChange = e => value = e.target.value

  const Message = props => (<div className={style.message}>{props.children}</div>)
  const CancelButton = () => (<RaisedButton label="Cancel" onClick={props.toggleLogin}/>)
  const RegisterButton = () => (<RaisedButton label="Register" onClick={props.toggleRegister}/>)
  const SubmitButton = () => (<RaisedButton label="Submit" onClick={submit}/>)

  return (
    <div>
      { props.pending && <LinearProgress mode="indeterminate"/> }
      { !props.pending && props.loggedIn && <Message>You're already logged in.</Message> }
      { !props.pending && !props.loggedIn && (
          <div>
            <TextField
              fullWidth={true}
              hintText="Enter your e-mail address or login token"
              onKeyPress={onKeyPress}
              onChange={onChange}/>
            { props.error && <Message>{props.error}</Message> }
            { props.received && <Message>Your request has been received. Please check your email.</Message> }
          </div>
      ) }
      <br/>
      <CancelButton/>&nbsp;
      <RegisterButton/>&nbsp;
      { !props.pending && !props.loggedIn && <SubmitButton/> }
    </div>
  )
}

Login.displayName = "UI/Login"

export default Login
