import { Map, List } from "immutable"
import storage from "./store/storage"

const storedUser = JSON.parse(storage.getItem("user") || false)
const storedToken = storage.getItem("token")

export default {
  data: Map({
    token: storedToken || null,
    user: Map(storedUser || {}),
    views: Map({
      postsList: Map({
        loading: true,
        loadingError: null,
        page: 0,
        posts: List(),
        updatedAt: 0
      }),
      post: Map({
        loading: true,
        loadingError: null,
        comments: List()
      }),
      user: Map({
        posts: List()
      }),
      login: Map({
        loading: false,
        loginError: null
      }),
      submitPost: Map({
        visible: false,
        pending: false,
        submitError: null
      })
    }),
    entities: Map({
      postLists: Map({}),
      posts: Map({}),
      users: Map(storedUser ? {
        [storedUser.id]: storedUser
      } : {}),
      comments: Map({})
    })
  })
}