import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterContainer from '../containers/FilterContainer'
import HogContainer from '../containers/HogContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
        <HogContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
