import React, { Component } from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

const CardExtraContent = ({ children }) => (
  <div className={cx("extraContainer")}>
    {children}
  </div>
)

CardExtraContent.displayName = "UI/lib/Card/ExtraContent"

export default CardExtraContent
