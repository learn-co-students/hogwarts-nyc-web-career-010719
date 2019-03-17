import React, { Component } from 'react'


export default class HogTile extends Component {

  state = {
    flipped: false
  }

  showTile = () => {
    if (this.state.flipped) {
      return (
        <div>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Greased: {this.props.hog.greased ? "true" : "false"}</p>
          <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <h2>{this.props.hog.name}</h2>
          <img src={this.props.image} alt={this.props.hog.name} />
        </div>
      )
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      flipped: !prevState.flipped
    }))
  }


  render() {
    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
        {this.showTile()}
      </div>
    )
  }
}
