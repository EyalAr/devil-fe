import React from "react"
import style from "./style.less"

const LinearProgress = props => (
  <div className={style.wrapper}>
    <i className={`material-icons ${style.rotate}`}>settings</i>
  </div>
)

LinearProgress.displayName = "UI/lib/LinearProgress"

export default LinearProgress
