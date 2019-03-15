import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import SortAndFilter from './SortAndFilter'
import hogs from '../porkers_data';


class App extends Component {

 render() {
   return (
     <div className="App">
         < Nav />
         < SortAndFilter pigs={hogs}/>
     </div>
   )
 }
}

export default App;

// import React, { Component } from 'react';
// import '../App.css';
// import Nav from './Nav'
// import Tile from './Tile'
// import hogs from '../porkers_data';
// // import hogImgs from '../src/hogimgs/cherub'
//
// class App extends Component {
//
//   state = {
//     image: "",
//     name: "",
//     details: "",
//     pigs: []
//   }
//
//   componentDidMount = () => {
//     this.setState({pigs: hogs})
//   }
//
//   render() {
//     return (
//       <div className="App">
//           < Nav />
//           <Tile pigs={this.state.pigs}/>
//       </div>
//     )
//   }
// }
//
// export default App;
