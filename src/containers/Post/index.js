import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import PostUI from "../../ui/Post"
import apiGetPostRequest from "../../actions/apiGetPostRequest"
import toggleExpandedComment from "../../actions/toggleExpandedComment"
import toggleSubmitCommentPreview from "../../actions/toggleSubmitCommentPreview"
import toggleSubmitCommentVisible from "../../actions/toggleSubmitCommentVisible"
import submitCommentTextChange from "../../actions/submitCommentTextChange"
import apiSubmitCommentRequest from "../../actions/apiSubmitCommentRequest"

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
  const postView = data.getIn(["views", "post"])
  const postId = props.params.id
  const entities = data.get("entities")
  const users = entities.get("users")
  const post = entities.getIn(["posts", postId])

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

  const pending = postView.get("pending")
  if (pending) return { pending }

  const error = postView.get("error")
  if (error) return { error }

  const title = post.get("title")
  const url = post.get("url")
  const updatedAt = postView.get("updatedAt")
  const userId = post.get("user")
  const user = users.get(userId).toJS()
  const submitCommentView = data.getIn(["views", "submitComment", postId]).toJS()
  const comments = mapCommentIds(post.get("comments")).toJS()
  return { title, url, user, updatedAt, comments, submitCommentView }
}

const mapDispatchToProps = (dispatch, props) => {
  const postId = props.params.id
  return {
    loadPost: (id, page, mode, sort) => dispatch(apiGetPostRequest(id, page, mode, sort)),
    toggleExpandedComment: id => dispatch(toggleExpandedComment(id)),
    submitCommentCbs: {
      onPreviewToggle: () => dispatch(toggleSubmitCommentPreview(postId)),
      onVisibleToggle: () => dispatch(toggleSubmitCommentVisible(postId)),
      onChange: text => dispatch(submitCommentTextChange(postId, text)),
      onSubmit: text => dispatch(apiSubmitCommentRequest(postId, text))
    }
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer)

Post.displayName = "Containers/Post"

export default Post
