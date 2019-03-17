import React, { Component } from 'react';
import HogInfo from './HogInfo'


class HogList extends Component{
  constructor(props){
    super(props)
    this.state = {
      showInfo: false
    }
  }

  changeInfoState = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
    console.log(this.state.showInfo);
  }

render(){
  return(
    <div className="card">
    <h1>{this.props.hogName}</h1>
    <button onClick={this.changeInfoState}>{this.state.showInfo === false? "Show": "Hide"} Pig Info</button>
    {this.state.showInfo === true? < HogInfo hogSpecialty={this.props.hogSpecialty} hogGreased={this.props.hogGreased}/> : <p></p>  }
    </div>
  )
}
}

export default HogList;
