import React from 'react';
import '../App.css';
import Nav from './Nav'
import SortAndFilter from './SortAndFilter'
import hogs from '../porkers_data';


class App extends React.Component {



  render() {
    return (
      <div className="App">
          < Nav />
          <SortAndFilter pigs={hogs}/>
      </div>
    )
  }
}

export default App;
