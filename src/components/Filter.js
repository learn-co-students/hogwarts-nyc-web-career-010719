import React from 'react'

class Filter extends React.Component {
  state = {
    toggleGreased: false
  }

  handleClick = () => {
    this.setState({
      toggleGreased: !this.state.toggleGreased
    }, () => {
      console.log(this.state.toggleGreased)
      this.state.toggleGreased ? this.props.handleGrease() : this.props.resetHogs()
      }
    )
  }

  render() {
    return (
      <div className="border">
        <select onChange={(e) => this.props.handleHogs(e.target.value)}>
          <option name="all" value="all">All</option>
          <option name="asc" value="asc">A-Z name</option>
          <option name="desc" value="desc">Z-A name</option>
          <option name="heavy" value="heavy">Heaviest to Lightest</option>
          <option name="light" value="light">Lightest to Heaviest</option>
        </select>
        <button onClick={this.handleClick}>Grease Filter</button>
      </div>
    )
  }
}

export default Filter
