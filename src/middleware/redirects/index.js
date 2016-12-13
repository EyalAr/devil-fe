import { hashHistory } from "react-router"

const redirectActions = {
  "API.LOGIN.RESPONSE": action => action.data ? "/" : false,
  "API.SUBMIT_POST.RESPONSE": action => action.data ? `/post/${action.data.result}` : false
}

export default store => next => action => {
  next(action)
  var redirectAction
  if (redirectAction = redirectActions[action.type]) {
    const path = redirectAction(action)
    if (path) hashHistory.push(path)
  }
}
