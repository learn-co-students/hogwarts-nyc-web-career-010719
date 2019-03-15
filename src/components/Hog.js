import React, { Component, Fragment } from 'react';

class Hog extends Component {
  state = {
    toggleDetail: false
  }
  handleClick = () => {
    this.setState({
      toggleDetail: !this.state.toggleDetail
    })
  }
  
  render() {
    return (
      <div className="border" onClick={this.handleClick}>
        <h2>{this.props.hog.name} </h2>
        <img src={process.env.PUBLIC_URL + `/hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`} />
        { this.state.toggleDetail ?
          (<div>
          <p>{this.props.hog.specialty} </p>
          <p>{this.props.hog.greased ? 'true' : 'false'} </p>
          <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>{this.props.hog['highest medal achieved']}</p>
          </div>)
          :
          null
        }
      </div>
    )
  }
}
export default Hog
