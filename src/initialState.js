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
        pending: true,
        error: null,
        page: 0,
        posts: List(),
        updatedAt: 0
      }),
      post: Map({
        pending: true,
        error: null,
        comments: List()
      }),
      user: Map({
        posts: List()
      }),
      login: Map({
        visible: false,
        pending: false,
        error: null,
        received: false
      }),
      submitPost: Map({
        visible: false,
        pending: false,
        submitError: null
      }),
      register: Map({
        visible: false,
        pending: false,
        error: null,
        received: false
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
