import React from "react"
import LinearProgress from "material-ui/LinearProgress"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import style from "./style.css"

const ENTER_KEY = 13
const Message = props => (<div className={style.message}>{props.children}</div>)

const SubmitPost = props => {
  var title = ""
  var url = ""

  const submit = () => title && url && props.submit(title, url)
  const onKeyPress = e => e.keyCode === ENTER_KEY && submit()
  const onTitleChange = e => title = e.target.value
  const onUrlChange = e => url = e.target.value

  const CancelButton = () => (<RaisedButton label="Cancel" onClick={props.toggleSubmitPost}/>)
  const SubmitButton = () => (<RaisedButton label="Submit" onClick={submit}/>)

  return (
    <div>
      { props.pending && <LinearProgress mode="indeterminate"/> }
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
            { props.error && <Message>{props.error}</Message> }
          </div>
      ) }
      <br/>
      <CancelButton/>&nbsp;
      { !props.pending && <SubmitButton/> }
    </div>
  )
}

SubmitPost.displayName = "UI/SubmitPost"

export default SubmitPost
