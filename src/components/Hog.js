import React from 'react'

class Hog extends React.Component {
  state = {
    toggleDetail: false
  }

  handleClick = () => {
    this.setState({
      toggleDetail: !this.state.toggleDetail
    })
  }

  generateDetails = () => {
    return (
      <div>
        <p>{this.props.hog.specialty}</p>
        <p>{this.props.hog.greased ? 'true' : 'false'}</p>
        <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>{this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }

  render() {
    return (
      <div className='border' onClick={this.handleClick}>
      <p>{this.props.hog.name}</p>
      <img src={process.env.PUBLIC_URL + `/hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g,"_")}.jpg`} alt={this.props.hog.name}/>
      { this.state.toggleDetail ? this.generateDetails() : null }
      </div>
    )
  }
}

export default Hog
