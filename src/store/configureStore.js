import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import api from "../middleware/api"
import storage from "../middleware/storage"
import redirects from "../middleware/redirects"
import rootReducer from "../reducers"

const logger = createLogger({
  stateTransformer: state => Object.assign({}, state, { data: state.data.toJS() })
});

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api, storage, redirects, logger)
)

export default configureStore
