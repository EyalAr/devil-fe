import React, { Component } from "react"
import { connect } from "react-redux"
import PostUI from "../../ui/Post"
import apiGetPostRequest from "../../actions/apiGetPostRequest"

class PostContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { id, mode, page, sort, loadPost } = this.props
    loadPost(id, page, mode, sort)
  }

  render () {
    return (
      <PostUI {...this.props}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const { id, mode, page, sort } = props.params
  const loading = data.getIn(["post", "loading"])
  const loadingError = data.getIn(["post", "loadingError"])
  const title = data.getIn(["post", "title"])
  const updatedAt = data.getIn(["post", "updatedAt"])
  const users = data.getIn(["entities", "users"])
  const userId = data.getIn(["post", "user"])
  const user = userId ? users.get(userId).toJS() : {}
  const loaded = data.getIn(["post", "loaded"]).map(id => {
    const comment = data.getIn(["entities", "comments", id])
    return comment.set("user", users.get(comment.get("user")))
  }).toJS()
  return { title, user, id, mode, page, sort, loading, loadingError, updatedAt, loaded }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPost: (id, page, mode, sort) => dispatch(apiGetPostRequest(id, page, mode, sort))
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer)

Post.displayName = "Containers/Post"

export default Post
