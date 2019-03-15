import React from 'react'

import HogList from '../components/HogList'
import FilterContainer from '../containers/FilterContainer'

class HogContainer extends React.Component {
  state = {
    hogs: [],
    filter: 'all'
  }

  componentDidMount() {
    this.setState({ hogs: this.props.hogs })
  }

  sortHogsAlphabetically() {
    return this.state.hogs.sort((hog1,hog2) => {
      return hog1.name.localeCompare(hog2.name)
    })
  }

  sortHogsBackwards() {
    return this.state.hogs.sort((hog1,hog2) => {
      return hog2.name.localeCompare(hog1.name)
    })
  }

  sortHogsByWeightAsc() {
    return this.state.hogs.sort((hog1,hog2) => {
      return hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
  }

  sortHogsByWeightDesc() {
    return this.state.hogs.sort((hog1,hog2) => {
      return hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
  }

  handleHogs = (filter) => {
    this.setState({
      hogs: this.props.hogs,
      filter: filter
    }, () => {
      console.log('running')
      console.log(this.state.filter)
      switch(this.state.filter) {
        case "asc":
          let asc = this.sortHogsAlphabetically()
          this.setState({hogs:asc})
          break
        case "desc":
          let desc = this.sortHogsBackwards()
          this.setState({hogs:desc})
          break
        case "heavy":
          let heavy = this.sortHogsByWeightDesc()
          this.setState({hogs:heavy})
          break
        case "light":
          let light = this.sortHogsByWeightAsc()
          this.setState({hogs:light})
          break
        default:
          this.resetHogs()
          break
      }
    })
  }

  handleGrease = () => {
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.greased)
    })
  }

  resetHogs = () => {
    this.setState({
      hogs: this.props.hogs
    })
  }

  render() {
    return (
      <div className="border">
        {console.log(this.state.hogs)}
        <FilterContainer
          handleHogs={this.handleHogs}
          handleFilter={this.handleFilter}
          handleGrease={this.handleGrease}
          resetHogs={this.resetHogs}
        />
        <HogList hogs={this.state.hogs} />
      </div>
    )
  }
}

export default HogContainer
