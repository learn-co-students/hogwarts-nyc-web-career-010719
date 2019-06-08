import React from "react"
import Details from './Details'

class Hog extends React.Component{
  state = {
    toggle: false
  }
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
    let imgUrl = this.props.hog.name.split(" ").join("_").toLowerCase()
    return (
      <div className="pigTile" onClick={this.handleToggle}>
        <h1>{this.props.hog.name}</h1>
        <img src={require(`../hog-imgs/${imgUrl}.jpg`)} alt="oh no!" />
        {this.state.toggle && <Details hog={this.props.hog}/>}
      </div>
    )
  }
}

export default Hog
