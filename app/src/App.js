import React, { Component } from 'react'
import './App.css'
import DataButton from './containers/DataButton'
import BreweryList from './containers/BreweryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataButton />
        <BreweryList />
      </div>
    );
  }
}

export default App
