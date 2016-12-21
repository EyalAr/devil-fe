import React, { Component, isValidElement, Children } from "react"
import classnames from "classnames/bind"
import Dialog from "./Dialog"
import style from "./style.less"

const cx = classnames.bind(style)

const isActive = c => c.props.active
const isDialog = c => isValidElement(c) && c.type === Dialog

class DialogMuxer extends Component {
  constructor (props) {
    super(props)
    this.state = this.resetState()
  }

  resetState () {
    return {
      active: false,
      dialog: null,
      onClose: () => {},
      title: ""
    }
  }

  getStateFromDialog (dialog) {
    if (!dialog) return this.resetState()
    const { title, onClose } = dialog.props
    return { dialog, title, onClose }
  }

  componentWillReceiveProps (nextProps) {
    const children = nextProps.children
    const activeDialogs = Children
      .toArray(children)
      .filter(isDialog)
      .filter(isActive)
    const dialog = activeDialogs.length ? activeDialogs[0] : this.state.dialog
    this.setState(this.getStateFromDialog(dialog))
    this.setState({ active: !!activeDialogs.length })
  }

  render () {
    const { title, onClose, dialog, active } = this.state
    const { className, classNameInternal } = this.props
    return (
      <div className={cx("container", { active }, className)}>
        <div className={classNameInternal}>
          { !!title && <div className={cx("title")}>{title}</div> }
          <div className={cx("dialogWrapper")}>
            {dialog}
          </div>
        </div>
      </div>
    )
  }
}

DialogMuxer.displayName = "UI/lib/DialogMuxer"

export default DialogMuxer
