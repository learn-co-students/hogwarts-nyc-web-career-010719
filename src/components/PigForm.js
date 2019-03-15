import React from "react"

class PigForm extends React.Component {

  handleSortChange = (e) => {
    this.props.sortHog(e.target.value)
  }

  handleGreaseChange = (e) => {
    this.props.filterGreasy(e.target.value)
  }


  render(){
    return (
    <div className="">
      <label htmlFor="sort">Sort </label>
      <select name="sort" onChange={this.handleSortChange}>
        <option defaultValue> Select One </option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      <br/>

      <label htmlFor="greased">Hog is Greasy? </label>
      <select name="greased" onChange={this.handleGreaseChange}>
        <option defaultValue> Select One </option>
        <option value="greasy">Greasy</option>
        <option value="not greasy">Not Greasy</option>
      </select>
    </div>
  )}
}

export default PigForm
