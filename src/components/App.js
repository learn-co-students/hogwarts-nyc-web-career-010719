import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'

class App extends Component {

  constructor(){
    super()
    this.state = {
      filter: null
    }
  }

  filter = (greaseStatus) => {
    if (greaseStatus == "true"){
    this.setState({
      filter: true
    })
  }
  else if(greaseStatus == "false"){
    this.setState({
      filter: false
    })
  }
  else if (greaseStatus == "all") {
    this.setState({
      filter: null
    })
  }
}

  filteredHogs = () => {
    return hogs.filter (hog => hog.greased == this.state.filter)
  }

  render() {
    return (
      <div className="App">
          <Nav filter={this.filter} />
          {this.state.filter == null? hogs.map(hog => <HogList hogName={hog.name} hogSpecialty={hog.specialty} hogGreased={hog.greased}/>) : this.filteredHogs().map(hog => <HogList hogName={hog.name} hogSpecialty={hog.specialty} hogGreased={hog.greased}/>
          )}
      </div>
    )
  }
}

export default App;
