export ACTION_NAME = "API.GET_POSTS.RESPONSE"

export default (data, action) => {
  return data.update("posts", posts => posts.merge({
    loading: false,
    loadingError: action.error,
    updatedAt: action.data.time,
    loaded: action.error ? [] : data.loaded,
    page: action.error ? 0 : data.page
  }))
}
