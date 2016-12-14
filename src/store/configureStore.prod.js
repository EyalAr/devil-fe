import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import api from "../middleware/api"
import storage from "../middleware/storage"
import redirects from "../middleware/redirects"
import rootReducer from "../reducers"

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api, storage, redirects)
)

export default configureStore
