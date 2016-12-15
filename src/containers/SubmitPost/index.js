import React from "react"
import { connect } from "react-redux"
import SubmitPostUI from "../../ui/SubmitPost"
import apiSubmitPostRequest from "../../actions/apiSubmitPostRequest"
import toggleSubmitPost from "../../actions/toggleSubmitPost"

const mapStateToProps = (state, props) => {
  const data = state.data
  const submitPostView = data.getIn(["views", "submitPost"])
  const error = submitPostView.get("error")
  const pending = submitPostView.get("pending")
  return { error, pending }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (title, url) => dispatch(apiSubmitPostRequest(title, url)),
    toggleSubmitPost: () => dispatch(toggleSubmitPost())
  }
}

const SubmitPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitPostUI)

SubmitPost.displayName = "Containers/SubmitPost"

export default SubmitPost
