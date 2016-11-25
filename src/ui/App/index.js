import React from "react"

const App = props => (
  <div>
    <div>App</div>
    {props.children}
  </div>
)

App.displayName = "App"

export default App
