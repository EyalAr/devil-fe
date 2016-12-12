import { Map, List } from "immutable"

export default {
  data: Map({
    posts: Map({
      loading: true,
      loadingError: null,
      page: 0,
      loaded: List(),
      updatedAt: 0
    }),
    post: Map({
      loading: true,
      loadingError: null,
      loaded: List()
    }),
    user: Map({
      loggedIn: false,
      token: null,
      posts: List()
    }),
    entities: Map({
      posts: Map({}),
      users: Map({}),
      comments: Map({})
    })
  })
}
