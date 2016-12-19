import React, { Component } from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const CardMainContent = ({ children }) => (
  <div>{children}</div>
)

CardMainContent.displayName = "UI/lib/Card/MainContent"

export default CardMainContent
