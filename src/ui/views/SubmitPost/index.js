import React from "react"
import LinearProgress from "../../lib/LinearProgress"
import TextField from "../../lib/TextField"
import TextButton from "../../lib/TextButton"
import Message from "../../lib/Message"
import style from "./style.less"

const ENTER_KEY = 13

const SubmitPost = props => {
  var title = ""
  var url = ""

  const submit = () => title && url && props.submit(title, url)
  const onKeyPress = e => e.keyCode === ENTER_KEY && submit()
  const onTitleChange = e => title = e.target.value
  const onUrlChange = e => url = e.target.value

  const CancelButton = () => (<TextButton className={style.button} onClick={props.toggleSubmitPost}>Cancel</TextButton>)
  const SubmitButton = () => (<TextButton className={style.button} onClick={submit}>Submit</TextButton>)

  return (
    <div>
      { props.pending && <LinearProgress/> }
      { !props.pending && (
          <div>
            <TextField
              fullWidth={true}
              hintText="Post title"
              onKeyPress={onKeyPress}
              onChange={onTitleChange}/>
            <TextField
              fullWidth={true}
              hintText="Post URL"
              onKeyPress={onKeyPress}
              onChange={onUrlChange}/>
            { props.error && <Message error>{props.error}</Message> }
          </div>
      ) }
      <div className={style.buttonsWrapper}>
        <CancelButton/>
        { !props.pending && <SubmitButton/> }
      </div>
    </div>
  )
}

SubmitPost.displayName = "UI/views/SubmitPost"

export default SubmitPost
