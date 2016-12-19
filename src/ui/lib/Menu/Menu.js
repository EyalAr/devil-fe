import React, { Component } from "react"
import classnames from "classnames/bind"
import style from "./style.less"

const cx = classnames.bind(style)

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const anchorEl = this.props.anchor
    const items = [].concat(this.props.children)
    return (
      <div className={cx("container")}>
        <div className={cx("anchor")} onClick={this.toggleOpen}>
          {anchorEl}
        </div>
        { this.state.open &&
          <div className={cx("itemsContainer")}>
            {items.map(item => (
              <div className={cx("itemWrapper")}>
                {item}
              </div>
            ))}
          </div> }
      </div>
    )
  }
}

Menu.displayName = "UI/lib/Menu"

export default Menu
