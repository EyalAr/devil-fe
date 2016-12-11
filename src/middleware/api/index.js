import { camelize } from "humps"
import * as API_ACTIONS from "../../api"
import apiSuccessResponse from "../../actions/apiSuccessResponse"
import apiFailureResponse from "../../actions/apiFailureResponse"

export ACTION_REQUEST_RE = /^API\.(.+)\.REQUEST$/

const getActionName = type => {
  const m = type.match(ACTION_REQUEST_RE)
  return m ? m[1] : false
}

export default store => next => action => {
  return next(dispatch => {
    dispatch(action)
    const actionName = getActionName(action.type)
    var apiAction
    if (actionName && apiAction = API_ACTIONS[camelize(actionName)]) {
      return apiAction(action.params).then(
        data => dispatch(apiSuccessResponse(actionName, data)),
        error => dispatch(apiFailureResponse(actionName, error))
      )
    }
  })
}
