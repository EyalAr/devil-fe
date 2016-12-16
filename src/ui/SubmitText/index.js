import React from "react"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import Markdown from "../Markdown"
import LinearProgress from "material-ui/LinearProgress"
import Message from "../Message"

const DEFAULT_TEXTAREA_STYLE = {
  boxShadow: "0px 0px 5px 0px #c7c7c7"
}

const SubmitText = ({
  pending, error, preview, text, size, maxSize, id, className,
  textareaStyle, onChange, onPreviewToggle, onSubmit
}) => {
  return (
    <div className={className}>
      <div>
        { pending && <LinearProgress mode="indeterminate"/> }
        { !pending && preview && <Markdown source={text}/> }
        { !pending && !preview && <TextField
            id={id}
            value={text}
            multiLine={true}
            fullWidth={true}
            rows={size || 2}
            rowsMax={maxSize || size || 4}
            textareaStyle={textareaStyle || DEFAULT_TEXTAREA_STYLE}
            onChange={e => onChange(e.target.value)}/>
        }
      </div>
      { !pending && error && <Message>{error}</Message> }
      { !pending && <div>
          <FlatButton label={preview ? "Edit" : "Preview"} onClick={onPreviewToggle}/>&nbsp;
          <FlatButton label="Send" onClick={() => onSubmit(text)}/>
        </div>
      }
    </div>
  )
}

SubmitText.displayName = "UI/SubmitText"

export default SubmitText
