import '../App.css';
import React, { Component } from 'react'
import Hoginfo from './Hoginfo'

class Hog extends Component {
  // state = {
  //   showDetails: false
  // }

  render() {
    return (
      <div className="hogcard">
        <h1>{this.props.name}</h1>
        <img src={process.env.PUBLIC_URL + this.props.src} alt="some hog" />
        <br />

        { this.props.showDetails ?
          <div>
            <button onClick={ () => this.props.toggle(this.props.id)}>Hide Hog Details!</button>
            <Hoginfo hog={this.props}/>
          </div>
          :
          <button onClick={() => this.props.toggle(this.props.id)}>Show Hog Details!</button>
        }


      </div>
    )
  }
}

export default Hog
