import React from "react"
import PigForm from './PigForm'
import PigTile from './PigTile'

class PigIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      greasy: "none",
      sort: "none",
    }
  }


  sortWeight = () => {
    this.props.hogs.sort( (hog1, hog2) => {
      return (
      hog1[`weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`] - hog2[`weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`])
    })
  }

  sortName = () => {
    this.props.hogs.sort( (hog1, hog2) => {
      if(hog1.name < hog2.name) { return -1; }
      if(hog1.name > hog2.name) { return 1; }

    })
  }

  sortHog = (selection) => {
    this.setState({
      sort: selection
    })
  }

  filterGreasy = (value) => {
    console.log("value", this.state);
    this.setState({
      greasy: value
    })
  }


  render(){
    let weightRatio = `weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`
    let medal = `highest medal achieved`
    let funHogs = [];

    if (this.state.sort === 'name') {
      funHogs = this.sortName()
      console.log(funHogs);
    } else if (this.state.sort === 'weight') {
      funHogs = this.sortWeight()
    } else {
      funHogs = this.props.hogs
    }

		if (this.state.greasy === 'greasy') {
			funHogs = this.props.hogs.filter(h => {
				return !!h.greased;
			});
		} else if (this.state.greasy === 'not greasy') {
			funHogs = this.props.hogs.filter(h => {
				return !h.greased;
			});
		} else {
			funHogs = this.props.hogs;
		};

    console.log('funHogs', funHogs);
    return (
    <div className="index">
      <PigForm filterGreasy={this.filterGreasy} sortHog={this.sortHog}/>

      {funHogs.map((hog, id) => {
        return <PigTile key={id} name={hog.name} specialty={hog.specialty} greasy={hog.greased} weightRatio={hog[weightRatio]} medal={hog[medal]}/>
      })
      }
    </div>
    )
  }
}

export default PigIndex
