import storage from "../../store/storage"

const storageActions = {
  "API.LOGIN.RESPONSE": action => {
    if (action.data) {
      storage.setItem("token", action.data.token)
      storage.setItem("user", JSON.stringify(action.data.user))
    }
  },
  "LOGOUT": () => storage.clear()
}

export default store => next => action => {
  next(action)
  var storageAction
  if (storageAction = storageActions[action.type]) {
    storageAction(action)
  }
}
