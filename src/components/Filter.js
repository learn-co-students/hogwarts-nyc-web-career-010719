import React from 'react'

const Filter = (props) => {


  return (
    <div className="filterWrapper">
    <select onChange={props.handleSort}>
      <option value="name">Sort by Name</option>
      <option value="weight">Sort by Weight</option>
    </select>
    <button onClick={props.handleGreased}>Greased</button>
    </div>
  )
}


export default Filter
