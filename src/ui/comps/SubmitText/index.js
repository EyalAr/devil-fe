import React from "react"
import TextField from "../../lib/TextField"
import TextButton from "../../lib/TextButton"
import Markdown from "../../lib/Markdown"
import LinearProgress from "../../lib/LinearProgress"
import Message from "../../lib/Message"
import style from "./style.less"

const SubmitText = ({
  pending, error, preview, text, size, maxSize, id, className,
  multiline, onChange, onPreviewToggle, onSubmit
}) => {
  return (
    <div className={className}>
      <div>
        { pending && <LinearProgress/> }
        { !pending && preview && <Markdown source={text}/> }
        { !pending && !preview && <TextField
            id={id}
            className={style.textField}
            value={text}
            multiline={multiline}
            fullWidth={true}
            rows={size || 2}
            rowsMax={maxSize || size || 4}
            onChange={e => onChange(e.target.value)}/>
        }
      </div>
      { !pending && error && <Message>{error}</Message> }
      { !pending && <div className={style.buttonsWrapper}>
          <TextButton className={style.button} onClick={onPreviewToggle}>{preview ? "Edit" : "Preview"}</TextButton>
          <TextButton className={style.button} onClick={() => onSubmit(text)}>Send</TextButton>
        </div>
      }
    </div>
  )
}

SubmitText.displayName = "UI/comps/SubmitText"

export default SubmitText
