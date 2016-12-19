import React, { Component, isValidElement, Children } from "react"
import classnames from "classnames/bind"
import CardMainContent from "./CardMainContent"
import CardExtraContent from "./CardExtraContent"
import style from "./style.less"

const cx = classnames.bind(style)

const Card = ({ expanded, children }) => {
  return (
    <div>
      { expanded ?
        children :
        Children
          .toArray(children)
          .filter(c => isValidElement(c) && c.type === CardMainContent) }
    </div>
  )
}

Card.displayName = "UI/lib/Card"

export default Card
