import React from "react"

const App = props => (
  <div>
    <div>App</div>
    {props.children}
  </div>
)

App.displayName = "UI/App"

export default App
