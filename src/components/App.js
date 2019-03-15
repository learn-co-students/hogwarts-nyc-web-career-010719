import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigIndex from './PigIndex'
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <PigIndex hogs={hogs} />
      </div>
    )
  }
}

export default App;
