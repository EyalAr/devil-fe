import React from "react"
import style from "./style.css"

const TextButton = ({ label, onClick }) => (
  <span className={style.container} onClick={onClick}>{label}</span>
)

TextButton.displayName = "UI/TextButton"

export default TextButton
