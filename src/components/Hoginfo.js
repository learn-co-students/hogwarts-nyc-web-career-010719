import '../App.css';
import React, { Component } from 'react'

class Hoginfo extends Component {

  render() {
    console.log(this.props)
    return(
      <div className="hogcard">
      <h4>Specialty: {this.props.hog.specialty}</h4>
      <h4>Greased: { this.props.hog.greased ? "yes" : "no"}</h4>
      <h4>Highest Medal Earned: {this.props.hog.highestMedal}</h4>
      <h4>weight as a ratio of hog to LG Fridge: {this.props.hog.weight}</h4>
      </div>
    )
  }
}

export default Hoginfo
