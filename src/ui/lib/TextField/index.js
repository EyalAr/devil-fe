import React from "react"
import classnames from "classnames/bind"
import style from "./style.css"

const cx = classnames.bind(style)

const TextField = ({
  hintText, fullWidth, className, multiline, rows, value,
  onKeyPress, onChange
}) => (
  multiline ?
    <textarea
      placeholder={hintText}
      value={value}
      rows={rows}
      className={cx("element", className, { fullWidth })}
      onKeyPress={onKeyPress}
      onChange={onChange}/> :
    <input
      type="text"
      placeholder={hintText}
      value={value}
      className={cx("element", className, { fullWidth })}
      onKeyPress={onKeyPress}
      onChange={onChange}/>

)

TextField.displayName = "UI/lib/TextField"

export default TextField
