import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import PostUI from "../../ui/Post"
import apiGetPostRequest from "../../actions/apiGetPostRequest"
import toggleExpandedComment from "../../actions/toggleExpandedComment"
import togglePostPreview from "../../actions/togglePostPreview"
import toggleCommentReplyVisible from "../../actions/toggleCommentReplyVisible"
import toggleCommentReplyPreview from "../../actions/toggleCommentReplyPreview"
import replyCommentTextChange from "../../actions/replyCommentTextChange"
import apiSubmitCommentReplyRequest from "../../actions/apiSubmitCommentReplyRequest"
import toggleSubmitCommentPreview from "../../actions/toggleSubmitCommentPreview"
import toggleSubmitCommentVisible from "../../actions/toggleSubmitCommentVisible"
import submitCommentTextChange from "../../actions/submitCommentTextChange"
import apiSubmitCommentRequest from "../../actions/apiSubmitCommentRequest"
import toggleLogin from "../../actions/toggleLogin"

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
    if (!commentIds) return List([])
    return commentIds.map(id => {
      var comment = entities.getIn(["comments", id])
      const childrenIds = comment.get("children") || List()
      const userId = comment.get("user")
      return comment
        .set("children", mapCommentIds(childrenIds))
        .set("user", users.get(userId))
        .set("view", data.getIn(["views", "comment", id]))
    })
  }

  const pending = postView.get("pending") || postId !== postView.get("id")
  if (pending) return { pending }

  const error = postView.get("error")
  if (error) return { error }

  const title = post.get("title")
  const url = post.get("url")
  const preview = postView.get("preview")
  const updatedAt = postView.get("updatedAt")
  const userId = post.get("user")
  const user = users.get(userId).toJS()
  const submitCommentView = data.getIn(["views", "submitComment", postId]).toJS()
  const comments = mapCommentIds(post.get("comments")).toJS()
  const loggedIn = !!data.get("token")
  return {
    title, url, preview, user, loggedIn,
    updatedAt, comments, submitCommentView
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const postId = props.params.id
  return {
    loadPost: (id, page, mode, sort) => dispatch(apiGetPostRequest(id, page, mode, sort)),
    toggleExpandedComment: id => dispatch(toggleExpandedComment(id)),
    togglePreview: id => dispatch(togglePostPreview(id)),
    toggleLogin: () => dispatch(toggleLogin()),
    commentReplyCbs: {
      onPreviewToggle: commentId => dispatch(toggleCommentReplyPreview(commentId)),
      onVisibleToggle: commentId => dispatch(toggleCommentReplyVisible(commentId)),
      onChange: (commentId, text) => dispatch(replyCommentTextChange(commentId, text)),
      onSubmit: (commentId, text) => dispatch(apiSubmitCommentReplyRequest(postId, commentId, text))
    },
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
