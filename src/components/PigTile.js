import React from "react"


class PigTile extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      details: false
    }
  }

  nameToPicture(name){
    let filename = name.toLowerCase().split(" ").join("_")
    // console.log(filename);
    return `../hog-imgs/${filename}.jpg`
  }

  handleClick = () => {
    // e.preventDefault()
    if (this.state.details === false) {
      this.setState({
        details: true
      })
    }
    if (this.state.details === true) {
      this.setState({
        details: false
      })
    }
  }

  render() {
    let detailClasses = "description hidden"
    this.state.details === true
      ?
    detailClasses -= "hidden"
      :
    null


    return (
    <div className="pigTile" onClick={this.handleClick}>
      <div className="ui card">
        <div className="image">
        <img src={require('../hog-imgs/' +
          this.props.name.toLowerCase().split(" ").join("_") + '.jpg')} alt={this.props.name} />
        </div>
        <div className="content">
          <p className="header">{this.props.name}</p>
          <div className={detailClasses}>
            Specialty: {this.props.specialty}
            <br/>
            {this.props.greasy ? "Greasy" : "Not Greasy"}
            <br/>
            Weight Ratio: {this.props.weightRatio}
            <br/>
            Medal: {this.props.medal}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default PigTile
