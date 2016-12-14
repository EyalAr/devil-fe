import React, { Component } from "react"
import { connect } from "react-redux"
import PostsUI from "../../ui/Posts"
import apiGetPostsRequest from "../../actions/apiGetPostsRequest"
import gotoPost from "../../actions/gotoPost"

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

  const pending = postsList.get("pending")
  if (pending) return { pending }

  const error = postsList.get("error")
  if (error) return { error }

  const updatedAt = postsList.get("updatedAt")
  const posts = postsList.get("posts").map(id => {
    const post = entities.getIn(["posts", id])
    return post.set("user", users.get(post.get("user")))
  }).toJS()
  return { updatedAt, posts }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: (page, sort) => dispatch(apiGetPostsRequest(page, sort)),
    gotoPost: id => dispatch(gotoPost(id))
  }
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer)

Posts.displayName = "Containers/Posts"

export default Posts
