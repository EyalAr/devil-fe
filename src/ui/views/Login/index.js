import React from "react"
import isemail from "validator/lib/isEmail"
import { Link } from "react-router"
import LinearProgress from "../../lib/LinearProgress"
import TextField from "../../lib/TextField"
import TextButton from "../../lib/TextButton"
import Message from "../../lib/Message"
import style from "./style.less"

const ENTER_KEY = 13

const Login = props => {
  var value = ""

  const submit = () => value ? isemail(value) ? props.getToken(value) : props.login(value) : null
  const onKeyPress = e => e.keyCode === ENTER_KEY && submit()
  const onChange = e => value = e.target.value

  const CancelButton = () => (<TextButton className={style.button} onClick={props.toggleLogin}>Cancel</TextButton>)
  const RegisterButton = () => (<TextButton className={style.button} onClick={props.toggleRegister}>Register</TextButton>)
  const SubmitButton = () => (<TextButton className={style.button} onClick={submit}>Submit</TextButton>)

  return (
    <div>
      { props.pending && <LinearProgress/> }
      { !props.pending && props.loggedIn && <Message>You're already logged in.</Message> }
      { !props.pending && !props.loggedIn && (
          <div>
            <TextField
              fullWidth={true}
              hintText="Enter your e-mail address or login token"
              onKeyPress={onKeyPress}
              onChange={onChange}/>
            { props.error && <Message error>{props.error}</Message> }
            { props.received && <Message>Your request has been received. Please check your email.</Message> }
          </div>
      ) }
      <div className={style.buttonsWrapper}>
        <CancelButton/>
        <RegisterButton/>
        { !props.pending && !props.loggedIn && <SubmitButton/> }
      </div>
    </div>
  )
}

Login.displayName = "UI/views/Login"

export default Login
