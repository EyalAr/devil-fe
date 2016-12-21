import { routerReducer } from "react-router-redux"
import * as getPostsRequest from "./getPostsRequest"
import * as getPostsResponse from "./getPostsResponse"
import * as getPostRequest from "./getPostRequest"
import * as getPostResponse from "./getPostResponse"
import * as getUserRequest from "./getUserRequest"
import * as getUserResponse from "./getUserResponse"
import * as getTokenRequest from "./getTokenRequest"
import * as getTokenResponse from "./getTokenResponse"
import * as toggleExpandedComment from "./toggleExpandedComment"
import * as loginRequest from "./loginRequest"
import * as registerRequest from "./registerRequest"
import * as registerResponse from "./registerResponse"
import * as loginResponse from "./loginResponse"
import * as logout from "./logout"
import * as toggleSubmitPost from "./toggleSubmitPost"
import * as submitPostResponse from "./submitPostResponse"
import * as toggleLogin from "./toggleLogin"
import * as toggleRegister from "./toggleRegister"
import * as toggleMobileMenu from "./toggleMobileMenu"
import * as submitCommentRequest from "./submitCommentRequest"
import * as submitCommentResponse from "./submitCommentResponse"
import * as toggleSubmitCommentVisible from "./toggleSubmitCommentVisible"
import * as toggleSubmitCommentPreview from "./toggleSubmitCommentPreview"
import * as submitCommentTextChange from "./submitCommentTextChange"
import * as replyCommentTextChange from "./replyCommentTextChange"
import * as submitCommentReplyRequest from "./submitCommentReplyRequest"
import * as submitCommentReplyResponse from "./submitCommentReplyResponse"
import * as toggleCommentReplyPreview from "./toggleCommentReplyPreview"
import * as toggleCommentReplyVisible from "./toggleCommentReplyVisible"
import * as togglePostPreview from "./togglePostPreview"

const REDUCERS = [
  getPostsRequest,
  getPostsResponse,
  getPostRequest,
  getPostResponse,
  getUserRequest,
  getUserResponse,
  toggleExpandedComment,
  loginRequest,
  loginResponse,
  logout,
  toggleSubmitPost,
  getTokenRequest,
  getTokenResponse,
  submitPostResponse,
  toggleLogin,
  toggleRegister,
  toggleMobileMenu,
  registerRequest,
  registerResponse,
  submitCommentRequest,
  submitCommentResponse,
  toggleSubmitCommentVisible,
  toggleSubmitCommentPreview,
  submitCommentTextChange,
  replyCommentTextChange,
  submitCommentReplyRequest,
  submitCommentReplyResponse,
  toggleCommentReplyPreview,
  toggleCommentReplyVisible,
  togglePostPreview
]

export default (state, action) => {
  return {
    routing: routerReducer(state.routing, action),
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer.run(data, action), state.data)
  }
}
