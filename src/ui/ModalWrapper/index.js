import React from "react"

const ModalWrapper = props => {
  const children = props.children.filter(child => !!child)
  return (
    children.length ?
      <div>{children}</div> :
      null
  )
}

ModalWrapper.displayName = "UI/ModalWrapper"

export default ModalWrapper
