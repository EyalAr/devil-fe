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
import * as loginResponse from "./loginResponse"
import * as logout from "./logout"
import * as toggleSubmitPost from "./toggleSubmitPost"
import * as submitPostResponse from "./submitPostResponse"

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
  submitPostResponse
]

export default (state, action) => {
  return {
    routing: routerReducer(state.routing, action),
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer.run(data, action), state.data)
  }
}
