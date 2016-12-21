import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import UserUI from "../../ui/views/User"
import apiGetUserRequest from "../../actions/apiGetUserRequest"
import gotoPost from "../../actions/gotoPost"

class UserContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { params, loadUser } = this.props
    const { id, page, sort } = params
    loadUser(id, page, sort)
  }

  render () {
    return (
      <UserUI {...this.props}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const userView = data.getIn(["views", "user"])
  const userId = props.params.id
  const entities = data.get("entities")
  const user = entities.getIn(["users", userId])

  const pending = userView.get("pending")
  if (pending) return { pending }

  const error = userView.get("error")
  if (error) return { error }

  const name = user.get("name")
  const updatedAt = userView.get("updatedAt")
  const posts = user.get("posts", List()).map(id => {
    return entities.getIn(["posts", id])
  }).toJS()
  return { name, updatedAt, posts }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: (id, page, sort) => dispatch(apiGetUserRequest(id, page, sort)),
    gotoPost: id => dispatch(gotoPost(id))
  }
}

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

User.displayName = "Containers/User"

export default User
