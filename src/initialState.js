import { Map, List } from "immutable"
import storage from "./store/storage"

const storedUser = JSON.parse(storage.getItem("user") || false)
const storedToken = storage.getItem("token")

export default {
  data: Map({
    token: storedToken || null,
    user: storedUser ? storedUser.id : null,
    views: Map({
      app: Map({
        mobileMenuVisible: false
      }),
      postsList: Map({
        pending: true,
        error: null,
        page: 0,
        id: null,
        updatedAt: 0
      }),
      post: Map({
        pending: true,
        error: null,
        id: null,
        preview: false
      }),
      user: Map({
        pending: true,
        error: null,
        id: null
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
        error: null
      }),
      register: Map({
        visible: false,
        pending: false,
        error: null,
        received: false
      }),
      submitComment: Map({}),
      comment: Map({})
    }),
    entities: Map({
      postsLists: Map({}),
      posts: Map({}),
      users: Map(storedUser ? {
        [storedUser.id]: Map(storedUser)
      } : {}),
      comments: Map({})
    })
  })
}
