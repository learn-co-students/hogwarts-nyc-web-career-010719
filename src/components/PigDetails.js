import React, { Component } from 'react'
import Tile from './Tile'


export default class PigDetails extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.pig.specialty}</p>
        <p>{this.props.pig.greased}</p>
        <p>{this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>{this.props.pig['highest medal achieved']}</p>
      </div>
    )
  }
}
