import React, { Component } from "react"
import { connect } from "react-redux"
import UserUI from "../../ui/User"
import apiGetUserRequest from "../../actions/apiGetUserRequest"

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
  const user = data.getIn(["views", "user"])
  const entities = data.get("entities")

  const loading = user.get("loading")
  if (loading) return { loading }

  const loadingError = user.get("loadingError")
  if (loadingError) return { loadingError }

  const name = user.get("name")
  const updatedAt = user.get("updatedAt")
  const posts = user.get("posts").map(id => {
    return entities.getIn(["posts", id])
  }).toJS()
  return { name, updatedAt, posts }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: (id, page, sort) => dispatch(apiGetUserRequest(id, page, sort))
  }
}

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

User.displayName = "Containers/User"

export default User
