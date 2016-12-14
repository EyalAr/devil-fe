import React from "react"
import Dialog from "material-ui/Dialog"

const ModalWrapper = props => {
  const children = props.children.filter(child => !!child)
  return (
    children.length ?
      <Dialog
        title={props.title}
        open={true}
        onRequestClose={props.onRequestClose}>
        {children}
      </Dialog> :
      null
  )
}

ModalWrapper.displayName = "UI/ModalWrapper"

export default ModalWrapper
