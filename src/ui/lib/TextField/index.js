import React from "react"
import classnames from "classnames/bind"
import style from "./style.css"

const cx = classnames.bind(style)

const TextField = ({ hintText, fullWidth, onKeyPress, onChange }) => (
  <input
    type="text"
    placeholder={hintText}
    className={cx({ fullWidth: fullWidth })}
    onKeyPress={onKeyPress}
    onChange={onChange}/>
)

TextField.displayName = "UI/lib/TextField"

export default TextField
