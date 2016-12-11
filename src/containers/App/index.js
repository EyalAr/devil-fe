import React, { Component } from "react"
import AppUI from "../ui/App"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: Map({

      })
    }
  }

  onViewChangeRequest (view, params) {}

  render () {
    return (
      <AppUI
        onViewChangeRequest={this.onViewChangeRequest}/>
    )
  }
}

App.displayName = "Containers/App"

export default App
