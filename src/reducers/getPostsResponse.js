export const ACTION_NAME = "API.GET_POSTS.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "postsList"], {
    pending: false,
    error: action.error
  }) :
  data.mergeIn(["views", "postsList"], {
    pending: false,
    error: null,
    updatedAt: action.data.time,
    ...action.data.entities.postsLists[action.data.result]
  }).mergeDeepIn(["entities"], action.data.entities)
