import React from "react";

class Sort extends React.Component {

  render() {
    return (
      <div>
      <h4> Sort By Name Or Weight: </h4>
        <select name="sort" onChange={e => this.props.handleSort(e.target.value)}>
          <option value="" selected disabled hidden>Sort By...</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      <h4> See Greased Hogs: </h4>
      <input type="checkbox" value="greased" onChange={this.props.handleFiltering}/>
      </div>
    )
  }
}
export default Sort
