import React from 'react'
import Tile from './Tile'

export default class SortAndFilter extends React.Component {


  	state = {
  		status: "No Sort",
  		pigs: []
  	}

  	componentDidMount = () => {
  		this.setState({pigs: this.props.pigs})
  	}

    handleChange = (e) => {
		let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
		let arr = [...this.state.pigs]
		if (e.target.value === "Name Asc") {
			let sorted = [...arr].sort(function(a, b){
				var x = a.name.toLowerCase();
			  var y = b.name.toLowerCase();
			  if (x < y) {return -1;}
			  if (x > y) {return 1;}
  			return 0;
			})
			this.setState({status: "Name Asc", pigs: sorted})
		} else if (e.target.value === "Name Desc") {
			let sorted = [...arr].sort(function(a, b){
				var x = a.name.toLowerCase();
			  var y = b.name.toLowerCase();
			  if (x > y) {return -1;}
			  if (x < y) {return 1;}
  			return 0;
			})
			this.setState({status: "Name Desc", pigs: sorted})
		} else if (e.target.value === "Weight Asc") {
			let sorted = [...arr].sort(function(a, b){
				return a[weight] - b[weight]
			})
			this.setState({status: "Weight Asc", pigs: sorted})
		} else if (e.target.value === "Weight Desc") {
			let sorted = [...arr].sort(function(a, b){
				return b[weight] - a[weight]
			})
			this.setState({status: "Weight Desc", pigs: sorted})
		} else if (e.target.value === 'Greasy') {
      let greasy = [...arr].filter(p => {
        return p.greased === true
      })
      this.setState({status: "Greasy", pigs: greasy})
    }else {
			this.setState({status: "No Sort", pigs: this.props.pigs})
		}
	}



    render() {
      return (
        <div>
  			<select value={this.state.status} onChange={this.handleChange}>
  			  <option value="No Sort">No Sort</option>
  			  <option value="Name Asc">Name Asc</option>
  			  <option value="Name Desc">Name Desc</option>
  			  <option value="Weight Asc">Weight Asc</option>
  			  <option value="Weight Desc">Weight Desc</option>
          <option value="Greasy">Greasy Bois</option>

  			</select>
  			{this.state.pigs.map((hog, id) => {
  				let nameSlug = hog.name.replace(/\s/g, '_').toLowerCase()
  					return <Tile pigs={this.state.pigs} pig={hog} key={id} name={hog.name} hogImage={nameSlug}/>
  				})
  			}
        </div>
    )
  }
}
