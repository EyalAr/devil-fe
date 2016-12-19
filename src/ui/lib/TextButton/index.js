import React from "react"
import style from "./style.css"

const TextButton = ({ children, onClick }) => (
  <span className={style.container} onClick={onClick}>{children}</span>
)

TextButton.displayName = "UI/lib/TextButton"

export default TextButton
