export const ACTION_NAME = "API.GET_USER.RESPONSE"

export const run = (data, action) => action.error ?
  data.mergeIn(["views", "user"], {
    pending: false,
    error: action.error
  }) :
  data.mergeIn(["views", "user"], {
    pending: false,
    error: null,
    updatedAt: action.data.time,
    posts: action.data.entities.postsLists[action.data.result].posts
  })
    .mergeDeepIn(["entities", "posts"], action.data.entities.posts)
    .mergeDeepIn(["entities", "users"], action.data.entities.users)
