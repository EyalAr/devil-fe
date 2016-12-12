import { routerReducer } from "react-router-redux"
import * as getPostsRequest from "./getPostsRequest"
import * as getPostsResponse from "./getPostsResponse"
import * as getPostRequest from "./getPostRequest"
import * as getPostResponse from "./getPostResponse"
import * as getUserRequest from "./getUserRequest"
import * as getUserResponse from "./getUserResponse"

const REDUCERS = [
  getPostsRequest,
  getPostsResponse,
  getPostRequest,
  getPostResponse,
  getUserRequest,
  getUserResponse
]

export default (state, action) => {
  return {
    routing: routerReducer(state.routing, action),
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer.run(data, action), state.data)
  }
}
