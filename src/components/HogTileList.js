import React, { Component } from 'react'
import HogTile from './HogTile'

export default class HogTileList extends Component {

  imageFile = (hogName) => {
    let name = hogName.toLowerCase().split(' ').join('_')
    let pic = require(`../hog-imgs/${name}.jpg`)
    return pic
  }

  renderHogs = () => {
    console.log(this.props.hogs)
    return this.props.hogs.map(hog => {
      return <HogTile hog={hog} image={this.imageFile(hog.name)} />
    })
  }


  render() {
    return (
      <div>
        <div className="ui grid container">
          {this.renderHogs()}
        </div>
      </div>
    )
  }
}
