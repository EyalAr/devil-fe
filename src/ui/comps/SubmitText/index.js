import React from "react"
import TextField from "../../lib/TextField"
import TextButton from "../../lib/TextButton"
import Markdown from "../../lib/Markdown"
import LinearProgress from "../../lib/LinearProgress"
import Message from "../../lib/Message"

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
          <TextButton onClick={onPreviewToggle}>{preview ? "Edit" : "Preview"}</TextButton>&nbsp;
          <TextButton onClick={() => onSubmit(text)}>Send</TextButton>
        </div>
      }
    </div>
  )
}

SubmitText.displayName = "UI/comps/SubmitText"

export default SubmitText
