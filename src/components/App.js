import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogTileList from './HogTileList'
import hogs from '../porkers_data';
import Filter from './Filter'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hogs: hogs,
      sortBy: "",
      greased: false
    }
  }

  handleSort = (e) => {
    this.setState({sortBy: e.target.value})
  }

  handleGreased = (e) => {
    this.setState(prevState => ({
      greased: !prevState.greased
    }))
  }

  greased = () => {
    if (this.state.greased) {
      return hogs.filter(hog => hog.greased)
    }
    else {
      return hogs
    }
  }

  sortHogs = () => {
    let hogList = this.greased()
    console.log(hogList)
    if (this.state.sortBy === "name") {
      return hogList.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (this.state.sortBy === "weight") {
      let weight = ['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      return hogList.sort((a, b) => {
        return a[weight] - b[weight]
      })
    }
    else {
      return hogList
    }
  }


  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleSort={this.handleSort} handleGreased={this.handleGreased}/>
          <HogTileList hogs={this.sortHogs()}/>
      </div>
    )
  }
}

export default App;
