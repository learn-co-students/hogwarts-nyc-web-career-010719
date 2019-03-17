import React, { Component} from 'react'

class Search extends Component{

  handle = (e) => {
    this.props.filter(e.target.id)
  }

render(){
  return(
    <div>
    <button id="true" onClick={this.handle}>Greased</button>
    <button id="false" onClick={this.handle}>Un-Greased</button>
    <button id="all" onClick={this.handle}>All</button>
     </div>
  )
}
}

export default Search
