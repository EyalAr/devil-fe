export const ACTION_NAME = "API.GET_POST.RESPONSE"

export const run = (data, action) => action.data.error ?
  data.update("post", post => post.merge({
    loading: false,
    loadingError: action.error
  })) :
  data.update("post", post => post.merge({
    loading: false,
    loadingError: null,
    updatedAt: action.data.time,
    loaded: action.data.loaded,
    title: action.data.title,
    user: action.data.user
  })).update("entities", entities => entities.mergeDeep(action.data.entities))
