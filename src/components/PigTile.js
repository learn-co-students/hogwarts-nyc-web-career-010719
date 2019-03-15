import React from 'react'
import PigIndex from './PigIndex'

class PigTile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			details: false
		};
	};

	handleClick = () => {
		this.state.details === false
			?
		this.setState({ details: true })
			:
		this.setState({ details: false })
	};

	render() {
		let detailClasses = 'description hidden';

		this.state.details === true ? detailClasses -= 'hidden' : null;

		return (
			<div className="pigTile" onClick={this.handleClick}>
		    <div className="ui card">
		      <div className="image">
		        <img src={require('../hog-imgs/' + this.props.name.toLowerCase().split(" ").join("_") + '.jpg')} />
		      </div>
		      <div className="content">
		        <p className="header">{this.props.name}</p>
		        <div className="meta">
							<div className={detailClasses}>
								<div>
									{this.props.specialty}
								</div>
								<div>
									{this.props.greased ? 'Greasy' : 'Not greasy'}
								</div>
								<div>
									weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.weight}
								</div>
								<div>
									highest medal achieved: {this.props.medal}
								</div>
							</div>
		        </div>
		      </div>
		    </div>
		  </div>
		);
	};
};

export default PigTile;
