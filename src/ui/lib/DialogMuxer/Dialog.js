import React from "react"

const Dialog = props => {
  return (
    <div>{props.children}</div>
  )
}

Dialog.displayName = "UI/lib/DialogMuxer/Dialog"

export default Dialog
