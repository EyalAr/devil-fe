import React from "react"
import style from "./style.css"

const noop = () => {}

const TextButton = ({ children, onClick }) => (
  <span className={style.container} onClick={onClick || noop}>{children}</span>
)

TextButton.displayName = "UI/lib/TextButton"

export default TextButton
