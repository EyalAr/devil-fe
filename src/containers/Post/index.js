import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import PostUI from "../../ui/Post"
import apiGetPostRequest from "../../actions/apiGetPostRequest"
import toggleExpandedComment from "../../actions/toggleExpandedComment"

class PostContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { params, loadPost } = this.props
    const { id, page, mode, sort } = params
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
  const post = data.getIn(["views", "post"])
  const entities = data.get("entities")
  const users = entities.get("users")

  const mapCommentIds = commentIds => {
    return commentIds.map(id => {
      var comment = entities.getIn(["comments", id])
      const childrenIds = comment.get("children") || List()
      const userId = comment.get("user")
      return comment
        .set("children", mapCommentIds(childrenIds))
        .set("user", users.get(userId))
    })
  }

  const loading = post.get("loading")
  if (loading) return { loading }

  const loadingError = post.get("loadingError")
  if (loadingError) return { loadingError }

  const title = post.get("title")
  const url = post.get("url")
  const updatedAt = post.get("updatedAt")
  const userId = post.get("user")
  const user = users.get(userId).toJS()
  const comments = mapCommentIds(post.get("comments")).toJS()
  return { title, url, user, updatedAt, comments }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPost: (id, page, mode, sort) => dispatch(apiGetPostRequest(id, page, mode, sort)),
    toggleExpandedComment: id => dispatch(toggleExpandedComment(id))
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer)

Post.displayName = "Containers/Post"

export default Post
