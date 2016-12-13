import React from "react"

const ENTER_KEY = 13

const SubmitPost = props => {
  var title = ""
  var url = ""
  const submit = (title, url) => {
    if (title && url) props.submit(title, url)
  }
  const onKeyPress = e => {
    if (e.keyCode === ENTER_KEY) submit(title, url)
  }
  const onTitleChange = e => title = e.target.value
  const onUrlChange = e => url = e.target.value

  return (
    props.pending ?
      <div>Please wait...</div> :
      props.error ?
        <div>{props.error}</div> :
        <div>
          <div><input placeholder="Enter title" onChange={onTitleChange} onKeyPress={onKeyPress} /></div>
          <div><input placeholder="Enter URL" onChange={onUrlChange} onKeyPress={onKeyPress} /></div>
          <div><button onClick={() => submit(title, url)}>Submit</button></div>
        </div>
  )
}

SubmitPost.displayName = "UI/SubmitPost"

export default SubmitPost
