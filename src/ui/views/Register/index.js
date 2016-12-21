import React from "react"
import LinearProgress from "../../lib/LinearProgress"
import TextField from "../../lib/TextField"
import TextButton from "../../lib/TextButton"
import Message from "../../lib/Message"
import style from "./style.less"

const ENTER_KEY = 13

const Register = props => {
  var email = ""
  var name = ""

  const submit = () => email && name && props.register(email, name)
  const onKeyPress = e => e.keyCode === ENTER_KEY && submit()
  const onEmailChange = e => email = e.target.value
  const onNameChange = e => name = e.target.value

  const CancelButton = () => (<TextButton className={style.button} onClick={props.toggleRegister}>Cancel</TextButton>)
  const SubmitButton = () => (<TextButton className={style.button} onClick={submit}>Submit</TextButton>)

  return (
    <div>
      { props.pending && <LinearProgress/> }
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
            { props.error && <Message error>{props.error}</Message> }
            { props.received && <Message>Your request has been received. Please wait for an email from us.</Message> }
          </div>
      ) }
      <div className={style.buttonsWrapper}>
        <CancelButton/>
        { !props.pending && !props.loggedIn && <SubmitButton/> }
      </div>
    </div>
  )
}

Register.displayName = "UI/views/Register"

export default Register
