import React from "react";
import Hog from './Hog'
import Sort from './Sort'


class HogContainer extends React.Component {

  render() {
    return (
      <div>
      <Sort
        handleSort={this.props.handleSort}
        handleFiltering={this.props.handleFiltering}
      />
      <br />
        {this.props.hogs.map(hog => <Hog key={hog.name} hog={hog}/>)}
      </div>
    )
  }
}
export default HogContainer
