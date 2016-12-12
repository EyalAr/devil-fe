export ACTION_NAME = "API.GET_POSTS.RESPONSE"

export default (data, action) => data.error ?
  data.update("posts", posts => posts.merge({
    loading: false,
    loadingError: action.error
  })) :
  data.update("posts", posts => posts.merge({
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    loaded: data.loaded,
    page: data.page
  })).update("entities", entities => entities.merge(data.entities))
