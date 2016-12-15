import React from "react"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import Markdown from "react-markdown"
import LinearProgress from "material-ui/LinearProgress"
import Message from "../Message"

const SubmitText = ({
  pending, error, preview, text, size, maxSize, id,
  onChange, onPreviewToggle, onSubmit
}) => {
  return (
    <div>
      <div>
        { pending && <LinearProgress mode="indeterminate"/> }
        { !pending && preview && <Markdown source={text} escapeHtml={true}/> }
        { !pending && !preview && <TextField
            id={id}
            value={text}
            multiLine={true}
            fullWidth={true}
            rows={size || 2}
            rowsMax={maxSize || size || 4}
            onChange={e => onChange(e.target.value)}/>
        }
      </div>
      { !pending && error && <Message>{error}</Message> }
      { !pending && <div>
          <FlatButton label={preview ? "Edit" : "Preview"} onClick={onPreviewToggle}/>&nbsp;
          <FlatButton label="Submit" onClick={() => onSubmit(text)}/>
        </div>
      }
    </div>
  )
}

SubmitText.displayName = "UI/SubmitText"

export default SubmitText
