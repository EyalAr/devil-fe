import React from "react"
import classnames from "classnames/bind"
import style from "./style.css"

const noop = () => {}
const cx = classnames.bind(style)

const TextButton = ({ children, onClick, className }) => (
  <span className={cx("container", className)} onClick={onClick || noop}>{children}</span>
)

TextButton.displayName = "UI/lib/TextButton"

export default TextButton
