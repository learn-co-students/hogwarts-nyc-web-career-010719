import React, {Component} from 'react'

class HogInfo extends Component{

  render(){
    return(
      <div className="card">
      <h1>{this.props.hogSpecialty}</h1>
      <label>Greased?
      {this.props.hogGreased? <h1>"yes"</h1>: <h1>"no"</h1>}
      </label>
      </div>
    )
  }
}

export default HogInfo
