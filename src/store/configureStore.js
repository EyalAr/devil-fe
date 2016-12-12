import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import api from "../middleware/api"
import rootReducer from "../reducers"

const logger = createLogger({
  stateTransformer: state => Object.assign({}, state, { data: state.data.toJS() })
});

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api, logger)
)

export default configureStore
