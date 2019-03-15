import React, { Component } from 'react';

class Filter extends Component {
  state = {
    toggledGreased: false
  }

  handleClick = () => {
    this.setState({
      toggledGreased: !this.state.toggledGreased
    }, () => {
      this.state.toggledGreased ? this.props.handleGrease() : this.props.resetHogs()
    })
  }
  render() {
    return (
      <div className="border">
        <select onChange={(e) => this.props.handleHogs(e.target.value)}>
          <option name="all" value="all">All</option>
          <option name="asc" value="asc">A-Z Name</option>
          <option name="des" value="des">Z-A Name</option>
          <option name="heavy" value="heavy">Heavy to Light</option>
          <option name="light" value="light">Light to Heavy</option>
        </select>
        <button onClick={this.handleClick}>Grease Filter</button>
      </div>
    )
  }
}

export default Filter
