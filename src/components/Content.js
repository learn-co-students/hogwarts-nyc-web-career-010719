import React, { Component } from 'react'
import Hoglist from './Hoglist'

class Content extends Component {
  state = {
    hogs: [],
    filterGreased: false
  }

  handleShowDetails = (id) => {
    let updatedHogs = this.state.hogs.map( hog => {
      if (hog.id === id) {
        return {...hog, showDetails: !hog.showDetails}
      } else {
        return hog
      }
    })
    this.setState({ hogs: updatedHogs})
  }

  handleSort = (e) => {
    if (e.target.value === "weight") {
      let hogsByWeight = this.state.hogs.sort(this.compareWeight)
      this.setState({hogs: hogsByWeight})
    } else if (e.target.value === "name") {
      let hogsByName = this.state.hogs.sort(this.compareName)
      this.setState({hogs: hogsByName})
    }
  }

  handleFilter = () => {
    console.log("will filter for greased");
    if (this.state.filterGreased) {
      console.log("all hogs", this.props.hogs);
      this.setState({
        hogs: this.props.hogs,
        filterGreased: false
      })
    } else {
      // console.log("not currently filtering!! but now will filter");
      // this.setState({filterGreased: true})
      let filteredHogs = this.state.hogs.filter( hog => hog.greased)
      console.log("filtered hogs", filteredHogs);
      this.setState({
        hogs: filteredHogs,
        filterGreased: true
      })
    }
  }



  compareName(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  compareWeight(a,b) {
    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      return -1;
    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      return 1;
    return 0;
  }

  componentDidMount() {
    let newHogs = this.props.hogs.map( hog => {
      return {...hog, showDetails: false}
    })

    this.setState({ hogs: newHogs })


  }

  render() {
    return (
      <div>
        <select onChange={this.handleSort}>
          <option name="name" value="name">Sort by Name</option>
          <option name="weight" value="weight">Sort by Weight</option>
        </select>

        <form>
          <label htmlFor="filter">Filter for greased hogs</label>
          <input onChange={this.handleFilter} type="checkbox" id="filter" name="greased" value="greased" />
        </form>

        <Hoglist
          hogs={this.state.hogs}
          sort={this.handleSortsort}
          filterGreased={this.handleFilter}
          toggle={this.handleShowDetails}
        />
      </div>
    )
  }
}

export default Content
