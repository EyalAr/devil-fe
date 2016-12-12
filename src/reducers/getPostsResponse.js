export const ACTION_NAME = "API.GET_POSTS.RESPONSE"

export const run = (data, action) => action.data.error ?
  data.update("posts", posts => posts.merge({
    loading: false,
    loadingError: action.error
  })) :
  data.update("posts", posts => posts.merge({
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    loaded: action.data.loaded
  })).update("entities", entities => entities.mergeDeep(action.data.entities))
