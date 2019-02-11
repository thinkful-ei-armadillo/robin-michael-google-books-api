import React, { Component } from 'react';
import './App.css';
import SeacrhAndFilter from './SearchAndFilter';
import Booklist from './Booklist';
import FilterBooklist from './FilterBooklist';

class App extends Component {
  
  constructor(Props){
    super();
    this.state = {
      lists: []
    }
    this.getSearchResults = this.getSearchResults.bind(this);
  }
  handleInput = (val) => {
    
<<<<<<< HEAD
    console.log(val)
  }

  getSearchResults(val){
     //const results = this.props.getSearchResults(val);
     console.log(val);
  }


=======
  }

>>>>>>> ff5314e34854bd0f55bd8ddf454509b7a8855251
  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div>
          <SeacrhAndFilter getSearchResults={this.getSearchResults()} />
          <FilterBooklist />
        </div>
          
        <main>
          <Booklist />
        </main>
      </div>
    );
  }
}

export default App;
