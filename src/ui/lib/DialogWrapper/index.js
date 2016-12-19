import React from "react"

const DialogWrapper = props => {
  const children = props.children.filter(child => !!child)
  return (
    children.length ? <div>{children}</div> : null
  )
}

/*
props.title
props.onRequestClose
*/

DialogWrapper.displayName = "UI/lib/DialogWrapper"

export default DialogWrapper
