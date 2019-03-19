import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    hogs: [],
    sortBy: "default",
    filterGreasedHogs: false
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  passDownHogs = () => {
    let hogs = this.state.hogs
    if (this.state.filterGreasedHogs) {
      return this.filterGreasedHogs(hogs)
    }
    if (this.state.sortBy === 'name') {
      return this.handleNameSort(hogs)
    } else if (this.state.sortBy === 'weight') {
      return this.handleWeightSort(hogs)
    }else {
      return hogs
    }
  }

  filterGreasedHogs = hogs => {
    let filteredHogs = hogs.filter(hog => hog.greased)
    return filteredHogs
  }

  handleFiltering = e => {
    this.setState({
      filterGreasedHogs: e.target.checked
    })
  }

  handleNameSort = hogs => {
    let newHogs = hogs.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    })
    return newHogs
  }

  handleWeightSort = hogs => {
    let newHogs = hogs.sort(function(a, b) {
      var textA = a.weight
      var textB = b.weight
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    })
    return newHogs
  }

  handleSort = value => {
    this.setState({
      sortBy: value
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <HogContainer
            handleFiltering={this.handleFiltering}
            handleSort={this.handleSort}
            hogs={this.passDownHogs()}
          />
      </div>
    )
  }
}

export default App;
