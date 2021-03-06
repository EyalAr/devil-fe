import { camelize } from "humps"
import * as API_ACTIONS from "../../api"
import apiSuccessResponse from "../../actions/apiSuccessResponse"
import apiFailureResponse from "../../actions/apiFailureResponse"

export const ACTION_REQUEST_RE = /^API\.(.+)\.REQUEST$/

const getActionName = type => {
  const m = type.match(ACTION_REQUEST_RE)
  return m ? m[1] : ""
}

export default ({ dispatch, getState }) => next => action => {
  next(action)
  const actionName = getActionName(action.type)
  var apiAction
  if (actionName && (apiAction = API_ACTIONS[camelize(actionName.toLowerCase())])) {
    const token = getState().data.get("token")
    return apiAction(action.params, token).then(
      data => dispatch(apiSuccessResponse(actionName, data, action)),
      error => dispatch(apiFailureResponse(actionName, error.toString(), action))
    )
  }
}
