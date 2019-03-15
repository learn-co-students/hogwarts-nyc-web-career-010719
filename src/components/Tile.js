import React, { Component } from 'react'
import PigDetails from './PigDetails'

export default class Tile extends React.Component {

	state = {
		show: false
	}

	handleRenderDetails = () => {
		if (this.state.show === true) {
			this.setState({show: false})
			return
		}
		this.setState({show: true})

	}

  render() {
    let image = require(`../hog-imgs/${this.props.hogImage}.jpg`)
    return (
      <div className="pigTile">
        <img src={image} alt="hog" style={{  }}/>
        <p>{this.props.name}</p>
				<button onClick={this.handleRenderDetails}>Hog Details</button>
					{this.state.show && <PigDetails pig={this.props.pig}/>}
      </div>
    )
  }
}

// import React from "react";
// import Pig from './Pig'
//
// class Tile extends React.Component {
//
// 	renderPigs = () => {
// 		this.props.pigs.map(p => {
// 			return <Pig name={p.name} key={p.id}/>
// 		})
// 	}
//
//   render() {
//     return (
//       <div className="pigTile">
// 				{this.renderPigs()}
//       </div>
//     )
//   }
// }
// export default Tile
