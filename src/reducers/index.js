import getPostsRequest from "./getPostsRequest"

const REDUCERS = [
  getPostsRequest
]

export default (state, action) => {
  return {
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer(data, action), state.data)
  }
}
