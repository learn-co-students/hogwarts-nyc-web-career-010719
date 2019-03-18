import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Content from './Content'
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        < Content hogs={hogs}/>
      </div>
    )
  }
}

export default App;
