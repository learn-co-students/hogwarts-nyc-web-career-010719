import React, { Component } from 'react'

import Hog from './Hog'

class Hoglist extends Component {
  getImageSrc(hogName) {
    let slug = hogName.toLowerCase().split(" ").join("_")
    return "/hog-imgs/" + slug + ".jpg"
  }



  render() {
    return (
    <div>
      { this.props.hogs.map( hog => {
        return (
          <Hog
            key={hog.id}
            id={hog.id}
            name={hog.name}
            greased={hog.greased}
            highestMedal={hog["highest medal achieved"]}
            specialty={hog.specialty}
            weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            src={this.getImageSrc(hog.name)}
            showDetails={hog.showDetails}
            toggle={this.props.toggle}
          />
        )
      } )}
    </div>
  )
  }
}

export default Hoglist
