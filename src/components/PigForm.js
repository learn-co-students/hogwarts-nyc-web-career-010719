import React from 'react'

class PigForm extends React.Component {
  constructor(props) {
    super(props);
  };

  handleSort = e => {
    this.props.sort(e.target.value);
  };

  handleGrease = e => {
    this.props.filterGreasy(e.target.value);
  };

  render() {
    return (
      <div className="">
        <label htmlFor="sort">Sort the hoggos?</label>
        <select
          name="sort"
          onChange={this.handleSort}
        >
          <option value="none">We have the technology</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>

        <br/><br/>

        <label htmlFor="greased">Hog is greasy?</label>
        <select
          name="greased"
          onChange={this.handleGrease}
        >
          <option value="neutral">The choice is yours</option>
          <option value="yes">Greasy</option>
          <option value="no">Not greasy</option>
        </select>
      </div>
    )
  }
}

export default PigForm;
