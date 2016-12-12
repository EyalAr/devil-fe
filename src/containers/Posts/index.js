import React, { Component } from "react"
import { connect } from "react-redux"
import PostsUI from "../../ui/Posts"
import apiGetPostsRequest from "../../actions/apiGetPostsRequest"

class PostsContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { page, sort, loadPosts } = this.props
    loadPosts(page, sort)
  }

  render () {
    return (
      <PostsUI {...this.props}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const { page, sort } = props.params
  const loading = data.getIn(["posts", "loading"])
  const loadingError = data.getIn(["posts", "loadingError"])
  const updatedAt = data.getIn(["posts", "updatedAt"])
  const users = data.getIn(["entities", "users"])
  const loaded = data.getIn(["posts", "loaded"]).map(id => {
    const post = data.getIn(["entities", "posts", id])
    return post.set("user", users.get(post.get("user")))
  }).toJS()
  return { page, sort, loading, loadingError, updatedAt, loaded }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: (page, sort) => dispatch(apiGetPostsRequest(page, sort))
  }
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer)

Posts.displayName = "Containers/Posts"

export default Posts
