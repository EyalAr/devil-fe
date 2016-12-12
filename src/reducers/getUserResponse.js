export const ACTION_NAME = "API.GET_USER.RESPONSE"

export const run = (data, action) => action.data.error ?
  data.update("user", user => user.merge({
    loading: false,
    loadingError: action.error
  })) :
  data.update("user", user => user.merge({
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    posts: action.data.posts,
    username: action.data.username
  })).update("entities", entities => entities.mergeDeep(action.data.entities))
