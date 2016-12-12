import { Map, List } from "immutable"

export default {
  data: Map({
    posts: Map({
      loading: false,
      loadingError: null,
      page: 0,
      loaded: List(),
      updatedAt: 0
    }),
    post: Map({
      loading: false,
      loadingError: null
    }),
    user: Map({
      loggedIn: false,
      token: null
    }),
    entities: Map({
      posts: Map({}),
      users: Map({}),
      comments: Map({})
    })
  })
}
