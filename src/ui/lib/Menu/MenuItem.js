import React, { Component } from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const MenuItem = props => (
  <div className={cx("item")}>{props.children}</div>
)

MenuItem.displayName = "UI/lib/Menu/Item"

export default MenuItem
