import React, { Component } from 'react'
import Header from './containers/HeaderConnected'
import MainSection from './containers/MainSectionConnected'

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <MainSection />
      </>
    )
  }
}

export default App
