import React from 'react'
import PigDetails from './PigDetails'

export default class Tile extends React.Component {


  state = {
    expanded: false
  }

  handleDetailRender = () => {
    if (this.state.expanded === false) {
      this.setState({expanded: true})
    } else {
      this.setState({expanded: false})
    }
  }

  render() {
    let image = require(`../hog-imgs/${this.props.hogImage}.jpg`)
    return (
      <div className="pigTile">
        <img src={image} alt="hog"/>
        <p>{this.props.name}</p>
        <button value={this.props.pig.id} onClick={this.handleDetailRender}>Hog Wild!</button><br />
        {this.state.expanded && <PigDetails pig={this.props.pig} />}
      </div>
    )
  }
}
