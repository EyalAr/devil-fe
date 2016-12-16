import React from "react"
import style from "./style.css"

export default ({ url }) => (
  <iframe className={style.renderer} src={url} frameBorder="0"></iframe>
)
