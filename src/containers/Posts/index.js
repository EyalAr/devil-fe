import React, { Component } from "react"
import { connect } from "react-redux"
import PostsUI from "../../ui/Posts"
import apiGetPostsRequest from "../../actions/apiGetPostsRequest"

class PostsContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { params, loadPosts } = this.props
    loadPosts(params.page, params.sort)
  }

  render () {
    return (
      <PostsUI {...this.props}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  const data = state.data
  const postsList = data.getIn(["views", "postsList"])
  const entities = data.get("entities")
  const users = entities.get("users")

  const loading = postsList.get("loading")
  if (loading) return { loading }

  const loadingError = postsList.get("loadingError")
  if (loadingError) return { loadingError }

  const updatedAt = postsList.get("updatedAt")
  const posts = postsList.get("posts").map(id => {
    const post = entities.getIn(["posts", id])
    return post.set("user", users.get(post.get("user")))
  }).toJS()
  return { updatedAt, posts }
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
