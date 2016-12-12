import React, { Component } from "react"
import { connect } from "react-redux"
import UserUI from "../../ui/User"
import apiGetUserRequest from "../../actions/apiGetUserRequest"

class UserContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { id, page, sort, loadUser } = this.props
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
  const { id, page, sort } = props.params
  const loading = data.getIn(["user", "loading"])
  const loadingError = data.getIn(["user", "loadingError"])
  const username = data.getIn(["user", "username"])
  const updatedAt = data.getIn(["user", "updatedAt"])
  const posts = data.getIn(["user", "posts"]).map(id => {
    return data.getIn(["entities", "posts", id])
  }).toJS()
  return { username, id, page, sort, loading, loadingError, updatedAt, posts }
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
