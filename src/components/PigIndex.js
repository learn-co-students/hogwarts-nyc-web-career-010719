import React from 'react'
import PigForm from './PigForm'
import PigTile from './PigTile'

class PigIndex extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			greasy: 'neutral',
			sort: 'none',
		};
	};

	filterGreasy = (value) => {
		this.setState({
			greasy: value,
		});
	};

	doSort = (value) => {
		this.setState({
			sort: value,
		});
	};

	render() {
		const weightString = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
		const medalString = 'highest medal achieved';
		const bunchaHogs = [...this.props.hogs];
		let funHogs;
		let sortParam;

		if (this.state.greasy === 'yes') {
			funHogs = bunchaHogs.filter(h => {
				return !!h.greased;
			});
		} else if (this.state.greasy === 'no') {
			funHogs = bunchaHogs.filter(h => {
				return !h.greased;
			});
		} else if (this.state.greasy === 'neutral') {
			funHogs = bunchaHogs;
		};

		if (this.state.sort === 'weight') {
			funHogs = funHogs.sort((a, b) => {
				return b[weightString] - a[weightString];
			});
		} else if (this.state.sort === 'name') {
			funHogs = funHogs.sort((a, b) => {
				if (a.name < b.name) { return -1; }
				else if (a.name > b.name) { return 1; }
				else return 0;
			});
		};

		return (
			<div className="index">
				<PigForm sort={this.doSort} filterGreasy={this.filterGreasy} />
					{funHogs.map((hog, id) => {
						return (
							<PigTile
								name={hog.name}
								weight={hog[weightString]}
								specialty={hog.specialty}
								greased={hog.greased}
								key={id}
								medal={hog[medalString]}
							/>
						);
					})}
			</div>
		)
	}
};

export default PigIndex;
