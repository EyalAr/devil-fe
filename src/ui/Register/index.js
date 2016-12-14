import React from "react"
import LinearProgress from "material-ui/LinearProgress"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import style from "./style.css"

const ENTER_KEY = 13

const Register = props => {
  var email = ""
  var name = ""

  const submit = () => email && name && props.register(email, name)
  const onKeyPress = e => e.keyCode === ENTER_KEY && submit()
  const onEmailChange = e => email = e.target.value
  const onNameChange = e => name = e.target.value

  const Message = props => (<div className={style.message}>{props.children}</div>)
  const CancelButton = () => (<RaisedButton label="Cancel" onClick={props.toggleRegister}/>)
  const SubmitButton = () => (<RaisedButton label="Submit" onClick={submit}/>)

  return (
    <div>
      { props.pending && <LinearProgress mode="indeterminate"/> }
      { !props.pending && (
          <div>
            <TextField
              fullWidth={true}
              hintText="Enter your e-mail address"
              onKeyPress={onKeyPress}
              onChange={onEmailChange}/>
            <TextField
              fullWidth={true}
              hintText="Enter your full name"
              onKeyPress={onKeyPress}
              onChange={onNameChange}/>
            { props.error && <Message>{props.error}</Message> }
            { props.received && <Message>Your request has been received. Please wait for an email from us.</Message> }
          </div>
      ) }
      <br/>
      <CancelButton/>&nbsp;
      { !props.pending && !props.loggedIn && <SubmitButton/> }
    </div>
  )
}

Register.displayName = "UI/Register"

export default Register
